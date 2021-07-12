// if(true){
//     let foo = 'zce1';
// }
// console.log(foo);

//-------------------------------------
// for(var i = 0; i < 5; i++){
//     console.log(i)
//     for(var i = 0; i < 5; i++){
//         console.log(i)
//     }
// }
// for (var i = 0; i < 5; i++) {
//     console.log(i)
// }

//let 是块级作用域 与var 区别let 不会变量提升

// console.log(foo)
// let foo = '1'  //变量声明的提升

// for(let i=0; i<3; i++){
//     let i = 'foo';
//     console.log(i);
// }

//const 常量/恒量 声明过后就不能修改 （只读）
//声明同时必须赋值
//不能声明后重新指向内存地址

const obj ={};
obj.name = '9'
console.log(obj)
obj = {}

/**
 * 不用var , 主用const , 配合let;
 */