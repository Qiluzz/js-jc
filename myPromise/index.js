/* 
    1. promise
*/
const MyPromise = require('./day3')


let p1 = new MyPromise((resolve, reject)=>{
    console.log('create a promise');
    setTimeout(() => {
        resolve('成功')
    }, 100);
    
    console.log('create a promise2');
})
p1.then(value =>console.log(value))
console.log(p1)