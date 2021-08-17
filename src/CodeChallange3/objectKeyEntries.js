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

export function getFilteredKey(obj) {
    const filterArr = Object.keys(obj);
    return filterArr.filter(key => key === 'age')
}

export function getArrayOfKeysAndValues(obj) {
    return Object.entries(obj);
}

export function sortedArraysByValuesLength(obj) {
    const sortedArrVL = Object.entries(obj)
    return sortedArrVL.sort(function(a,b) {
        return b[1].length - a[1].length;
    })
}