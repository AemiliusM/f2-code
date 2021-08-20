export function howMuchPencil(str) {
    let thing = []
    for (let i = 0; i <= str.length; i++) {
        thing.push(str.slice(i))
    }
    return thing

}

export function wordsToCharList(str) {
    return str.split('');
}

// export function listFoods(thing) {
//     return thing.ingredients.map(stuff =>{
//         return thing.split('').slice(2).join('')
//     })
// } I could not figure out what I did wrong
// map through the ingredients of the list. use split to grab the words starting at slice(2) and join them together

// export function stepActions(thing) {
//     return thing.steps.map(stuff => {
//         return stuff.split('')[0]
//     })
// } This one looks good, but it says I am not getting the right info back