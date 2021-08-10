export function doubleNumbers(arr) {
    return arr.map((num) => num *2);
}

export function stringItUp(arr) {
    return arr.map((num) => ''+num);
}

export function capitalNames(arr){
    return arr.map((string) => string.slice(0,1).toUpperCase() + string.slice(1, string.length));
}