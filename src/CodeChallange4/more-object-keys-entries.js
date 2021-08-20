export function getHouses(obj) {
    return Object.values(obj).map(obj => obj.house);
}

export function updateNumbers(obj) {
    return Object.entries(obj).map(obj => obj[0] + ': ' + obj[1])
}

export function totalCharacters(arr) {
    let total = 0;
    Object.values(arr).map(arr => {
        total += arr.children.length;
        if (arr.spouse) total++;
        return total ++;
    });
    return total;
}

export function hasChildrenEntries(arr, character) {
    let gotObj; 
    arr.forEach(item => {
            if (item.name === character){
                gotObj = item
            }            
    })        
    if (gotObj['children'].length){
        return true
    } else {
        return false
    }
} 

  

