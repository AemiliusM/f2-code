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

