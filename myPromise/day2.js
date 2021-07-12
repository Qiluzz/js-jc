const PENDING = 'pending';
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
    reason  = undefined;
    onFulfilledCallBacks = [];
    onRejectedCallBacks = [];

    resolve = value =>{
        if(this.status !== PENDING ) return
        this.status = FULFILLED
        this.value = value
        this.onFulfilledCallBacks.forEach(fn=>fn())
    }

    reject = reason =>{
        if(this.status !== PENDING) return
        this.reason = reason;
        this.status = REJECTED;
        this.onRejectedCallBacks.forEach(fn => fn())
    }

    then = (onFulfilled, onRejected) =>{
        onFulfilled = typeof  onFulfilled === 'function' ? onFulfilled : value => value
        onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason}
        
        let promise2 = new Promise((resolve, reject)=>{
            if(this.status === onFulfilled){
                setTimeout(() => {
                    try {
                        let x = onFulfilled(this.value)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0);
            }else if(this.status === onRejected){
                setTimeout(() => {
                    try {
                        let x = onRejected(this.reason)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0);
            }else{
                this.onFulfilledCallBacks(()=>{
                    setTimeout(() => {
                        try {
                            let x = onFulfilled(this.value)
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (e) {
                            
                        }
                    }, 0);
                })

                this.onRejectedCallBacks(() => {
                    setTimeout(() => {
                        try {
                            let x = onRejected(this.value)
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (e) {

                        }
                    }, 0);
                })
            }
        }) 
        return promise2

    }

}

function resolvePromise (promise2, x, resolve, reject) {
    if(promise2 === x) return reject(new TypeError('Chaining cycle detected for promise'))

    if( x instanceof Promise){
        x.then(resolve, reject)
    }else{
        resolve(x)
    }
}