function deepCopy(target){
    let copy_array = [];
    function _deepCopy(target) {
        if(typeof target !== 'object' || !target) return target;
        for(let i=0; i< copy_array.length; i++){
            if(copy_array[i].target === target){
                return copy_array[i].copyTarget;
            }
        }
        let obj ={}
        if (!Array.isArray(target) ){
            obj = []
        }
        copy_array.push({ target: target, copyTarget: obj})
        Object.keys(target).forEach(key =>{
            if(obj[key]) return
            obj[key] = _deepCopy(target[key]);
        })
        return obj
    }
    return _deepCopy(target)
}

let obj = {
    a: 1,
    b: {
        c: 2,
        d: 3,
    },
    f: function () {
        console.log(1111111111)
    }
}
obj.c = obj.b;
obj.e = obj.a
obj.b.c = obj.c
obj.b.d = obj.b
obj.b.e = obj.b.c

console.log('obj:', obj);

let obj2 = deepCopy(obj)
obj2.f = function () {
    console.log('0000000000');
}
obj2.a = 1111
console.log('obj2:', obj2);
obj2.f()
obj.f()