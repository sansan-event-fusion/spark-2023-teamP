const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT || 'http://localhost:3000';

export function isEmptyObject(obj: any) {
    if (!obj) {
        return true;
    }

    return Object.keys(obj).length === 0;
}

export function isEqual(x: any, y: any) {
    return x == y;
}

export function resolve(path: string) {
    return `${API_ENDPOINT}${path}`;
}

type TypeLiteralDescription = "string" | "number" | "boolean";
type TypeArrayDescription = "string[]" | "number[]" | "boolean[]" | "[]";
type TypeFileDescription = "File";
type TypeDescription = TypeLiteralDescription | TypeArrayDescription | TypeFileDescription;

function checkLiteralType(value: any): TypeLiteralDescription | null {
    switch (typeof value) {
        case "string":
            return "string";
        case "number":
            return "number";
        default:
            return null;
    }
}

function checkArrayType(value: any): TypeArrayDescription | null {
    if (Array.isArray(value)) {
        if (value.length > 0) {
            const literalType = checkLiteralType(value[0]);

            if (literalType) {
                return `${literalType}[]`;
            } else {
                return null;
            }
        } else {
            return "[]";
        }
    } else {
        return null;
    }
}

function checkFileType(value: any): TypeFileDescription | null {
    if (value instanceof File) {
        return "File";
    } else {
        return null;
    }
}

export function checkType(value: any): TypeDescription | null {
    let literalType = checkLiteralType(value);
    if (literalType) return literalType;

    let arrayType = checkArrayType(value);
    if (arrayType) return arrayType;

    let fileType = checkFileType(value);
    if (fileType) return fileType;

    return null;
}