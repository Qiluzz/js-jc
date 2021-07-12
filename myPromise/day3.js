const PENDING = 'pengding';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class Promise{
    constructor(executor){
        try {
            executor(this.resolve, this.reject)
        } catch (e) {
            this.reject(e)
        }
       
    }

    status = PENDING;
    value = undefined;
    reason = undefined;
    onFullfilledCallBacks =[];
    onRejectedCallBacks = [];

    resolve = value =>{
        if(this.status !== PENDING) return 
        this.status = FULFILLED;
        this.value = value;
        this.onFullfilledCallBacks.forEach(fn => fn())
    }

    reject =reason =>{
        if(this.reason !== PENDING ) return
        this.status = REJECTED;
        this.reason = reason;
        this.onRejectedCallBacks.forEach(fn => fn())
    }
 
    then =(onFulfilled, onRejected) =>{
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason}

        let promise2 = new Promise((resolve, reject)=>{
            if(this.status === FULFILLED){
                setTimeout(() => {
                    try {
                        let x = onFulfilled(this.value)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0);
            }else if(this.status === REJECTED){
                setTimeout(() => {
                    try {
                        let x = onRejected(this.reason)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0);
            }else{
                this.onFullfilledCallBacks.push(()=>{
                    setTimeout(() => {
                        try {
                            let x = onFulfilled(this.value)
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (e) {
                            reject(e)
                        }
                    }, 0);
                })
                this.onRejectedCallBacks.push(()=>{
                    setTimeout(() => {
                        try {
                            let x = onRejected(this.reason)
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
    if(x === promise2) return reject(new TypeError('Chaining cycle detecte your promise'))

    if(x instanceof Promise){
        x.then(resolve, reject)
    }else{
        resolve(x)
    }
}

module.exports = Promise