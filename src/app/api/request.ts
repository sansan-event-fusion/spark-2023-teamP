const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT || 'http://localhost:3000';

export type RequestParams = {
    [key: string]: string | number | boolean;
};

export type RequestQuery = {
    [key: string]: string | number | boolean;
};

export type RequestBody = {
    [key: string]: string | string[] | number | number[] | boolean | boolean[] | RequestBody | RequestBody[];
};

function isEmptyObject(obj: any) {
    if (!obj) {
        return true;
    }

    return Object.keys(obj).length === 0;
}

function resolve(path: string) {
    return `${API_ENDPOINT}${path}`;
}

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

    const queryParamStrings = Object.entries(query).map(([key, value]) => `${key}=${encodeURIComponent(value)}`);
    const queryString = queryParamStrings.join('&');

    return `${path}?${queryString}`;
}

async function getRequest(path: string, params?: RequestParams, query?: RequestQuery, body?: RequestBody) {
    if (!isEmptyObject(body)) {
        throw new Error('body is not available in a GET request.');
    }

    path = withParams(path, params);
    path = withQuery(path, query);

    return await fetch(resolve(path));
}

async function postRequest(path: string, params?: RequestParams, query?: RequestQuery, body?: RequestBody) {
    path = withParams(path, params);
    path = withQuery(path, query);

    let options: RequestInit = {
        method: 'POST',
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
    return await fetch(resolve(path), options);
}

async function patchRequest(path: string, params?: RequestParams, query?: RequestQuery, body?: RequestBody) {
    path = withParams(path, params);
    path = withQuery(path, query);

    let options: RequestInit = {
        method: 'PATCH',
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
    return await fetch(resolve(path), options);
}

type RequestOptions = {
    params?: RequestParams,
    query?: RequestQuery,
    body?: RequestBody
}
type RequestMethod = "GET" | "POST" | "PATCH";

export async function request(path: string, method: RequestMethod = "GET", options?: RequestOptions) {
    switch (method) {
        case "GET":
            return await getRequest(path, options?.params, options?.query, options?.body);
        case "POST":
            return await postRequest(path, options?.params, options?.query, options?.body);
        case "PATCH":
            return await patchRequest(path, options?.params, options?.query, options?.body);
    }
}

export async function requestJson<T>(path: string, method: RequestMethod = "GET", options?: RequestOptions): Promise<T> {
    const res = await request(path, method, options);
    const json = await res.json();
    return json;
}
