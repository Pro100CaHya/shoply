function camelToSnake(obj: Record<string, string | number | boolean>) {
    return Object.keys(obj).reduce((acc: Record<string, string | number | boolean>, key: string) => {
        const snakeKey = key.replace(/[A-Z]/g, (match) => `_${match.toLowerCase()}`);
        acc[snakeKey] = obj[key];
        return acc;
    }, {});
}

export {
    camelToSnake
}