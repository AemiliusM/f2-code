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

export function makeStrings(arr) {
    return arr.map((arr) => {
        if (arr.age >= 18) {
            return arr.name + " can go to The Matrix";
        }return arr.name + " is under age!!";
    })
}

export function readyToPutInTheDOM(arr){
    return arr.map((item) => {
        const pName = item.name;
        const pAge = item.age;
        return `<h1>${pName}</h1><h2>${pAge}</h2>`;
    })
}