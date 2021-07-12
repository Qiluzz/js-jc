'use strict'
var arr = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

let newArr = Array.from(new Set(arr.flat(Infinity))).sort((a,b)=>a-b)
console.log(newArr)
// function oneSort(sourceArray, flattenedArray=[]) {
//     for (const element of sourceArray ){
//         if (Array.isArray(element)){
//             oneSort(element, flattenedArray)
//         }else{
//             flattenedArray.push(element)
//         }
//     }
//     return flattenedArray
// }
// function oneSort(sourceArray, flattenedArray=[]) {
//     for (const element of sourceArray ){
//         if (Array.isArray(element)){
//             oneSort(element, flattenedArray)
//         }else{
//             flattenedArray.push(element)
//         }
//     }
//     return flattenedArray
// }
// let arr2  = oneSort(arr)
// console.log(arr2)
// let sortArr  = [...new Set(arr2)]
// for(let i=0;i<sortArr.length;i++){
//     console.log(typeof sortArr[i])
// }
// console.log(sortArr.sort((a,b)=>b-a))