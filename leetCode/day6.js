/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    if(s.length !== p.length && !p.includes('*')) return false
    
};
let b  = isMatch("aa","a")
console.log(b)