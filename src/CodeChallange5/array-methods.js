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