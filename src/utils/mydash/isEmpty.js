export const isEmpty = (value) => {
    if(value === null) return true;
    if(typeof value === 'string' && value.length) {
        return false
    }
    return typeof value !== 'object';
}
