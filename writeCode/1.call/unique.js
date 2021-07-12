//去重
function  unqiue(arr) {
    console.log(Array.from(new Set(arr)))
}
let obj ={'b': 1}
let arr = [1, 1, 3, 3, 'a', 'a', 'a', obj, { 'c': 1 }, obj]
// console.log('Set',[...new Set(arr)])
// unqiue(arr)

function unqiue2(arr) {
    let newArr = []
    for(let i= 0,len=arr.length;i <len; i++){
        !newArr.includes(arr[i])&& newArr.push(arr[i])
    }
    console.log(newArr)
}
// unqiue2(arr)

function unqiue3(arr) {
    let newArr = []
    for (let i = 0, len = arr.length; i < len; i++) {
        newArr.indexOf(arr[i]) === -1 && newArr.push(arr[i])
    }
    console.log(newArr)
}
// unqiue3(arr)

var calculate = function (s) {
    s = s.trim();
    const stack = new Array();
    let preSign = '+';
    let num = 0;
    const n = s.length;
    for (let i = 0; i < n; ++i) {
        if (!isNaN(Number(s[i])) && s[i] !== ' ') {
            console.log(num, s[i].charCodeAt(), '0'.charCodeAt() )
            num = num * 10 + s[i].charCodeAt() - '0'.charCodeAt();
            console.log(num)
        }
        if (isNaN(Number(s[i])) || i === n - 1) {
            switch (preSign) {
                case '+':
                    stack.push(num);
                    break;
                case '-':
                    stack.push(-num);
                    break;
                case '*':
                    stack.push(stack.pop() * num);
                    break;
                default:
                    stack.push(stack.pop() / num | 0);
            }
            preSign = s[i];
            num = 0;
        }
    }
    let ans = 0;
    while (stack.length) {
        ans += stack.pop();
    }
    return ans;
};

let b = calculate("14/3*2")
console.log(b);