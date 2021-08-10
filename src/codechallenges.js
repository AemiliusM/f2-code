export function doubleNumbers(arr) {
    return arr.map((num) => num *2);
}

export function stringItUp(arr) {
    return arr.map((num) => ''+num);
}

export function capitalName(arr) {
    return arr.map((item) => {
        const letterDown = item.toLowerCase();
        const capName = letterDown.charAt(0).toUpperCase() + letterDown.slice(1);
        return capName;
    })
}

export function onlyName(arr) {
    return arr.map((item) => {
        return item.name;
    })
}