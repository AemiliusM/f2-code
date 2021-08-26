export function returnTen(str) {
    // let thing = [];
    if (str.length <= 10) {
        return str.split('')
    }
    let x = str.length 
   const string = str.slice(1, x);
   return string.split('')
    } 

// export function findMax(matrix) {
  
//     const num = matrix.array.forEach.sort((a, b) => {
//         return a.value - b.value
//     })
//     return num.sort((a, b) => {
//    return a.value - b.value
//  })
// } I tried for about 25 min to get this to work but 
// Basically I want to map through each array in the matrix and return the highest number twice 