let target = {};
let proxy = new Proxy(target,{
    set:set
})
function set(trapTarget,key,value,receiver){
    if(isNaN(value)){
        throw new TypeError('Property' + key + 'must be a number')
    }
    console.log('receiver:',receiver)
    return Reflect.set(trapTarget,key, value, receiver)
}
proxy.name = 'dsssss23'