const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT || 'http://localhost:3000';

export function isEmptyObject(obj: any) {
    if (!obj) {
        return true;
    }

    return Object.keys(obj).length === 0;
}

export function resolve(path: string) {
    return `${API_ENDPOINT}${path}`;
}