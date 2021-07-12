function Stack() {
    let items = []

    //入栈
    this.push = function (params) {
        items.push(params)
    }
    //出栈
    this.pop = function () {
        return items.pop()
    }
    //返回栈顶元素
    this.peek=function () {
        if(items.length){
            return items[items.length -1]
        }else{
            return null
        }
    }
    //栈长度
    this.size = function () {
        return items.length
    }
    //清空栈
    this.clear = function () {
        items = []
    }

    
}

let a  = new Stack()
console.log(a)
a.push(1)
a.push(2)
a.push(3)
a.push(4)
a.push(5)
console.log(a.pop())
console.log(a.pop())
