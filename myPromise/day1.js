const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class Promise{
    constructor(exector){
        try {
            exector(this.resolve, this.reject)
        } catch (e) {
            this.reject(e)
        }
    }

    //定义变量
    status = PENDING;
    value = undefined;
    reason = undefined;
    resolveCallBacks = [];
    rejectCallBacks = [];

    resolve =value=>{
        if(this.status !== PENDING) return
        this.status = FULFILLED;
        this.value = value;
        this.resolveCallBacks.forEach(fn => fn())

    }


    reject = reason =>{
        if(this.status !== PENDING) return
        this.status = REJECTED;
        this.reason = reason;
        this.rejectCallBacks.forEach(fn => fn())

    }

    then =(onFullfill, onReject) =>{
        onFullfill = typeof onFullfill === 'function' ? onFullfill : value => value;
        onReject = typeof onReject === 'function' ? onReject : reason => {throw reason};
        
        let promise2 = new Promise((resolve, reject)=>{
            if(this.status === FULFILLED){
                setTimeout(() => {
                    try {
                        let x = onFullfill(this.value)
                        resolvePromise(promise2, x, resolve, reject)
                        
                    } catch (e) {
                       reject(e) 
                    }
                }, 0);
            }else if(this.status === REJECTED){
                setTimeout(() => {
                    try {
                        let x = onReject(this.reason);
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0);
            }else{
                this.resolveCallBacks.push(()=>{
                    setTimeout(() => {
                        try {
                            let x = onFullfill(this.value)
                            resolvePromise(promise2, x, resolve, reject)

                        } catch (e) {
                            reject(e)
                        }
                    }, 0);
                })
                this.rejectCallBacks.push(()=>{
                    setTimeout(() => {
                        try {
                            let x = onReject(this.reason);
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (e) {
                            reject(e)
                        }
                    }, 0);
                })
            }
        })
        return promise2
    }

}

function resolvePromise(promise2, x, resolve, reject) {
    if(x === promise2) return reject(new TypeError('Chaining cycle detecte'))
    if(x instanceof Promise){
        x.then(resolve, reject)
    }else{
        resolve(x)
    }
}

module.exports = Promise;