export function capitalizeObjectKeys(obj) {
    const objArr = Object.keys(obj);
    return objArr.map(str => str.toUpperCase());
    
}