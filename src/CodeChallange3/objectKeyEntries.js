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
