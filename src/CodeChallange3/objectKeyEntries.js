export function capitalizeObjectKeys(obj) {
    const objArr = Object.keys(obj);
    return objArr.map(str => str.toUpperCase());
    
}

export function sortedKeys(obj) {
    const sortArr = Object.keys(obj);
    return sortArr.sort(function(a,b) {
        return a.length - b.length;
    })
}