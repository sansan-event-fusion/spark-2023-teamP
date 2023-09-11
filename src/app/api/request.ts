const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT || 'http://localhost:3000';

type _Params = {
    [key: string]: string | number | boolean;
};

type _Body = {
    [key: string]: string | number | boolean;
};

function isEmptyObject(obj: any) {
    return Object.keys(obj).length === 0;
}

function resolve(path: string) {
    return `${API_ENDPOINT}${path}`;
}

function withParams(url: string, params: _Params) {
    if (isEmptyObject(params)) {
        return url;
    }

    const queryParamStrings = Object.entries(params).map(([key, value]) => `${key}=${encodeURIComponent(value)}`);
    const queryString = queryParamStrings.join('&');

    return `${url}?${queryString}`;
}

async function getRequest(path: string, params: _Params, body: _Body) {
    if (body) {
        throw new Error('body is not available in a GET request.');
    }

    const url = resolve(path);

    return await fetch(withParams(url, params));
}

async function postRequest(path: string, params: _Params, body: _Body) {
    const url = resolve(path);

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
    return await fetch(withParams(url, params), options);
}

async function patchRequest(path: string, params: _Params, body: _Body) {
    const url = resolve(path);

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
    return await fetch(withParams(url, params), options);
}

type RequestMethod = "GET" | "POST" | "PATCH";

export async function request(path: string, method: RequestMethod = "GET", params: _Params = {}, body: _Body = {}) {
    switch (method) {
        case "GET":
            return await getRequest(path, params, body);
        case "POST":
            return await postRequest(path, params, body);
        case "PATCH":
            return await patchRequest(path, params, body);
    }
}

export async function requestJson(path: string, method: RequestMethod = "GET", params: _Params = {}, body: _Body = {}) {
    const res = await request(path, method, params, body);
    const json = await res.json();
    return json;
}
