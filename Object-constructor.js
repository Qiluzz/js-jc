/**
 * 盗用构造函数
 * 
 */
function SuperType(){
    this.colors = ['red','blue','green']
    sayName =()=>{
        console.log(this.colors)
    }
}

SuperType.prototype.sayHello = function(){
    console.log('hello world!')
}
function SubType(){
    // SuperType.call(this)
}
SubType.prototype = new SuperType()

let instance = new SubType()
instance.sayHello()

/**
 * 组合继承（伪经典继承）
 * 原型链、盗用构造函数
 * 原型链继承原型上的属性和方法
 * 盗用构造函数继承实例属性 
 * */
function SuperObject(name){
    this.colors = ['red']
    this.name = name
}
SuperObject.prototype.sayName = function(){
    console.log(this.name)
}

function SubObject(name, age){
    SuperObject.call(this,name)
    this.age = age
}
SubObject.prototype = new SuperObject()

SubObject.prototype.sayAge = function(){
    console.log(this.age)
}
let instanceObject = new SubObject('Jack',45)

instanceObject.sayName()
instanceObject.sayAge()
instanceObject.colors.push('green')
instanceObject2 = new SubObject()
console.log(instanceObject2.colors)
console.log(instanceObject.colors)
