/**
 * @param {string} s
 * @return {number}
 */

// var lengthOfLongestSubstring = function (s) {
//     if (s.length === 0) return 0
//     let copyS = s, len = s.length, max = 0;

//     for (let i = 0; i < len; i++) {
//         let len2 = getLen(s.slice(i))
//         max = Math.max(len2, max)
//     }
//     console.log(max)
//     return max
// };

// var getLen = function (s) {

//     if (!s || s.length === 0 ) return 0
//     let copyS = s, len = s.length, arr = s[0];

//     for (let i = 1; i < len; i++) {
//         if (arr.includes(s[i])) {
//             break
//         } else {
//             arr = arr + s[i]
//         }
//     }
//     console.log(s, arr)
//     return arr.length
// }
var lengthOfLongestSubstring = function (s) {
    let arr = [];
    let max = 0;
    let len = s.length;
    for(let i=0; i < len; i++){
        let index = arr.indexOf(s[i])
        if(index > -1){
            arr.splice(0, index + 1)
        }
        arr.push(s[i])
        console.log(max, arr)
        max = Math.max(arr.length, max)
    }

}
lengthOfLongestSubstring("dvdf")