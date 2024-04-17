// Mapper function to convert snake_case keys to camelCase
function snakeToCamel(obj: Record<string, string | number | boolean>) {
    return Object.keys(obj).reduce((acc: Record<string, string | number | boolean>, key: string) => {
        const camelKey: string = key.replace(/_(\w)/g, (_, c) => c.toUpperCase());
        acc[camelKey] = obj[key];
        return acc;
    }, {});
}

// Mapper function to convert camelCase keys to snake_case
function camelToSnake(obj: Record<string, string | number | boolean>) {
    return Object.keys(obj).reduce((acc: Record<string, string | number | boolean>, key: string) => {
        const snakeKey = key.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`);
        acc[snakeKey] = obj[key];
        return acc;
    }, {});
}

export {
    snakeToCamel,
    camelToSnake
}