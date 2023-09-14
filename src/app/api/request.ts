import { isEmptyObject, resolve, checkType } from "./utils";

export type RequestParams = {
    [key: string]: string | number | boolean;
};

export type RequestQuery = {
    [key: string]: string | string[] | number | number[] | boolean | boolean[] | undefined;
};

export type RequestBody = {
    [key: string]: string | string[] | number | number[] | boolean | boolean[] | RequestBody | RequestBody[];
};

export type RequestForm = {
    [key: string]: string | string[] | number | number[] | boolean | boolean[] | File;
};

export type RequestHeaders = {
    [key: string]: string;
};

type RequestOptions = {
    params?: RequestParams,
    query?: RequestQuery,
    body?: RequestBody,
    form?: RequestForm,
    headers?: RequestHeaders,
};

function withParams(path: string, params?: RequestParams) {
    if (isEmptyObject(params) || !params) { // !params is needed for type inference
        params = {};
    }

    return path.replace(/:\w+/g, (match) => {
        const paramName = match.slice(1);
        if (params?.hasOwnProperty(paramName)) {
            return params[paramName].toString();
        } else {
            throw new Error(`Missing required parameter: ${paramName}`);
        }
    });
}

function withQuery(path: string, query?: RequestQuery) {
    if (isEmptyObject(query) || !query) { // !params is needed for type inference
        return path;
    }

    let queryParamStrings: string[] = [];

    Object.entries(query).forEach(([key, value]) => {
        if (value === undefined) {
            return;
        }

        if (Array.isArray(value)) {
            value.forEach(element => {
                queryParamStrings.push(`${key}[]=${encodeURIComponent(element)}`);
            });
        } else {
            queryParamStrings.push(`${key}=${encodeURIComponent(value)}`);
        }
    });

    if (queryParamStrings.length === 0) {
        return path;
    }

    const queryString = queryParamStrings.join('&');

    return `${path}?${queryString}`;
}

function convertForm(data: RequestForm) {
    const formData = new FormData();

    Object.entries(data).map(([key, value]) => {
        switch (checkType(value)) {
            case "string":
            case "number":
            case "boolean":
                formData.append(key, value.toString());
                break;
            case "string[]":
            case "number[]":
            case "boolean[]":
                (value as any[]).forEach(element => {
                    formData.append(`${key}[]`, element.toString()); 
                });
                break;
            case "[]":
                break;
            case "File":
                formData.append(key, (value as File));
                break;
            default:
                throw new Error(`Unsupported type in ${key}`);
        }
    });

    return formData;
}

async function getRequest(path: string, requestOptions: RequestOptions) {
    const { params, query, body, form, headers } = requestOptions;

    if (!isEmptyObject(body) || !isEmptyObject(form)) {
        throw new Error('body and form are not available in a GET request.');
    }

    path = withParams(path, params);
    path = withQuery(path, query);

    const options: RequestInit = {
        headers
    };

    return await fetch(resolve(path), options);
}

async function postRequest(path: string, requestOptions: RequestOptions) {
    const { params, query, body, form, headers } = requestOptions;

    path = withParams(path, params);
    path = withQuery(path, query);

    let options: RequestInit = {
        method: 'POST',
    }
    if (!isEmptyObject(body) && !isEmptyObject(form)) {
        throw new Error('body and form can not be used at the same time.');
    }
    if (!isEmptyObject(body)) {
        options = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }
    }
    if (!isEmptyObject(form)) {
        options = {
            ...options,
            body: convertForm(form!)
        }
    }

    options.headers = {
        ...headers,
        ...options.headers,
    };

    return await fetch(resolve(path), options);
}

async function patchRequest(path: string, requestOptions: RequestOptions) {
    const { params, query, body, form, headers } = requestOptions;

    path = withParams(path, params);
    path = withQuery(path, query);

    let options: RequestInit = {
        method: 'PATCH',
    }
    if (!isEmptyObject(body) && !isEmptyObject(form)) {
        throw new Error('body and form can not be used at the same time.');
    }
    if (!isEmptyObject(body)) {
        options = {
            ...options,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }
    }
    if (!isEmptyObject(form)) {
        options = {
            ...options,
            body: convertForm(form!)
        }
    }

    options.headers = {
        ...headers,
        ...options.headers,
    };

    return await fetch(resolve(path), options);
}

type RequestMethod = "GET" | "POST" | "PATCH";

export async function request(path: string, method: RequestMethod = "GET", options: RequestOptions = {}) {
    switch (method) {
        case "GET":
            return await getRequest(path, options);
        case "POST":
            return await postRequest(path, options);
        case "PATCH":
            return await patchRequest(path, options);
    }
}

export async function requestJson<T>(path: string, method: RequestMethod = "GET", options: RequestOptions = {}): Promise<T> {
    const res = await request(path, method, options);
    const json = await res.json();
    return json;
}
