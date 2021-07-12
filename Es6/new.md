### 数组去重的方法大致分为两类：

####  1.利用语法自身键不可重复性
    
```js
    
    //1.使用ES6的Set去重

    function unique(arr){
        return Array.from(new Set(arr))
    }

    //2.使用ES6解构

    [...new Set(arr)]

```


####  2.循环遍历

```js
//1.循环配合includes去重
 function unqiue2(arr) {
    let newArr = []
    for(let i= 0,len=arr.length;i <len; i++){
        !newArr.includes(arr[i])&& newArr.push(arr[i])
    }
    return newArr
}
//2.循环配合indexOf去重
function unqiue3(arr) {
    let newArr = []
    for (let i = 0, len = arr.length; i < len; i++) {
        newArr.indexOf(arr[i]) === -1 && newArr.push(arr[i])
    }
    return newArr
}
```
