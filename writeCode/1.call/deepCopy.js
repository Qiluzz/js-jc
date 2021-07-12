// function deepCopy(target) {
//     let result = []
//     function _deepCopy(target) {
//         if(typeof target !== 'object' || !target) {return target;}
//         for(let i =0; i < result.length; i++){
//             if (result[i].target  === target){
//                 return result[i].targetCopy
//             }
//         }

//         let obj = {};
//         if(Array.isArray(target)){
//             obj = []
//         }

//         result.push({target:target, targetCopy:obj})
//         Object.keys(target).forEach(key=>{
//             if(obj[key]) {return;}
//             obj[key] = _deepCopy(target[key]);
//         })

//         return obj
//     }
//     return _deepCopy(target)
// }

// day4
// function deepCopy(target) {
//     let targetCopy = [];
//     function _deepCopy(target) {
//         if(typeof target !== 'object' || !target){
//             return target
//         }
//         for(let i=0; i<targetCopy.length; i++){
//             if(targetCopy[i].target === target){
//                 return targetCopy[i].copyObj
//             }
//         }

//         let obj = {}
//         if(Array.isArray(target)){
//             obj =[]
//         }
//         targetCopy.push({target:target, copyObj:obj})
//         Object.keys(target).forEach(key=>{
//             if(obj[key]) return
//             obj[key] = _deepCopy(target[key])
//         })
//         return obj
        
//     }    
//     return _deepCopy(target)
// }


function deepCopy(target) {
    let targetCopy = []
    function _deepCopy(target) {
        if(typeof target !== 'object' || !target){
            return target
        }

        for(let i=0; i < targetCopy.length; i++){
            if(targetCopy[i].target === target){
                return targetCopy[i].copyObj
            }
        }

        let obj = {}
        if(Array.isArray(target)){
            let obj =[]
        }

        targetCopy.push({target: target, copyObj: obj})
        Object.keys(target).forEach(key =>{
            obj[key] = _deepCopy(target[key])
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

console.log('obj:',obj);
let obj2 = deepCopy(obj)
obj2.f = function () {
    console.log('0000000000');
}
obj2.a ='00000'
console.log('obj2:', obj2);
obj2.f()
obj.f()