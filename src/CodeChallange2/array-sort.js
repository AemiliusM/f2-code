export function leastToGreatest(arr) {
    return arr.sort(function(a, b) {
        return a-b;
    })
}
export function greatestToLeast(arr) {
    return arr.sort(function(a, b) {
        return b-a;
    })
}

export function lengthSort(arr) {
    return arr.sort(function(a ,b){
        return a.length - b.length
    })
}

export function alphabetical(arr) {
    return arr.sort();
}