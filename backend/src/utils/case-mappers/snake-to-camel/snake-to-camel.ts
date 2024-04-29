// Mapper function to convert snake_case keys to camelCase
function snakeToCamel(obj: Record<string, string | number | boolean>) {
    return Object.keys(obj).reduce((acc: Record<string, string | number | boolean>, key: string) => {
        const camelKey: string = key.replace(/_(\w)/g, (_, c) => c.toUpperCase());
        acc[camelKey] = obj[key];
        return acc;
    }, {});
}

export {
    snakeToCamel
}