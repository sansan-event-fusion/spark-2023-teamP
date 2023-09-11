const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT || 'http://localhost:3000';

type _Params = {
    [key: string]: string | number | boolean;
};

type _Query = {
    [key: string]: string | number | boolean;
};

type _Body = {
    [key: string]: string | string[] | number | number[] | boolean | boolean[] | _Body | _Body[];
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

function withParams(path: string, params?: _Params) {
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

function withQuery(path: string, query?: _Query) {
    if (isEmptyObject(query) || !query) { // !params is needed for type inference
        return path;
    }

    const queryParamStrings = Object.entries(query).map(([key, value]) => `${key}=${encodeURIComponent(value)}`);
    const queryString = queryParamStrings.join('&');

    return `${path}?${queryString}`;
}

async function getRequest(path: string, params?: _Params, query?: _Query, body?: _Body) {
    if (!isEmptyObject(body)) {
        throw new Error('body is not available in a GET request.');
    }

    path = withParams(path, params);
    path = withQuery(path, query);

    return await fetch(resolve(path));
}

async function postRequest(path: string, params?: _Params, query?: _Query, body?: _Body) {
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

async function patchRequest(path: string, params?: _Params, query?: _Query, body?: _Body) {
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
    params?: _Params,
    query?: _Query,
    body?: _Body
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

export async function requestJson<T>(path: string, method: RequestMethod = "GET", options?: RequestOptions) {
    const res = await request(path, method, options);
    const json = await res.json();
    return json;
}
