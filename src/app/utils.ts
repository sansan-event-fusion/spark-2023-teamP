export function matchPath(path: string, pattern: string) {
    const pathParts = path.split('/');
    const patternParts = pattern.split('/');

    if (pathParts.length !== patternParts.length) {
        return false;
    }

    for (let i = 0; i < pathParts.length; i++) {
        if (pathParts[i] !== patternParts[i]) {
            if (patternParts[i].length === 0) {
                return false;
            }
            if (patternParts[i][0] !== ':') {
                return false;
            }
        }
    }

    return true;
}