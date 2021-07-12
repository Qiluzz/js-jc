const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class Promise {
    constructor(executor){
        // console.log(executor, typeof executor,  JSON.stringify(executor) )
        try {
            executor(this.resolve, this.reject)
        } catch (err) {
            reject(err);
        }
        
    }
    status = PENDING;
    value = undefined;
    reason = undefined;
    onResolvedCallbacks = [];
    onRejectedCallbacks = [];

    resolve = value =>{
        if(this.status !== PENDING) return ;
        this.status = FULFILLED;
        this.value = value;
        this.onResolvedCallbacks.forEach(fn => fn());
    }

    reject = reason =>{
        // console.log(reason,'---')
        if (this.status !== PENDING) return
        this.status = REJECTED
        this.reason = reason
        this.onRejectedCallbacks.forEach(fn => fn());
    }

    then(onFulfilled, onRejected) {
        // 比如.then().then().then(() => {}); 这种调用，对可选参数的处理，透传
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val;
        onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err };

        const promise2 = new Promise((resolve, reject) => { // 一旦 new 则立即执行
            if (this.status === FULFILLED) {
                setTimeout(() => {
                    try {
                        const x = onFulfilled(this.value);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (err) {
                        reject(err);
                    }
                }, 0);
            }else if (this.status === REJECTED) {
                setTimeout(() => {
                    try {
                        const x = onRejected(this.reason);
                        resolvePromise(promise2, x, resolve, reject);
                    } catch (err) {
                        reject(err);
                    }
                }, 0);
            }else { // 本身是异步的
                this.onResolvedCallbacks.push(() => {
                    setTimeout(() => { // 这里需要加上，不加上跑测试跑不通
                        try {
                            const x = onFulfilled(this.value);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (err) {
                            reject(err);
                        }
                    });
                });
                this.onRejectedCallbacks.push(() => {
                    setTimeout(() => {
                        try {
                            const x = onRejected(this.reason);
                            resolvePromise(promise2, x, resolve, reject);
                        } catch (err) {
                            reject(err);
                        }
                    });
                });
            }
        });

        return promise2;
    }
    /**
     * Promise 中的 catch 指代的就是 then 没有成功回调的一个别名而已
     * @param {*} errCallback 
     */
    catch(errCallback) {
        return this.then(null, errCallback);
    }
}

function resolvePromise(promise2, x, resolve, reject) {
    //PromiseA+ 2.3.1
    if (promise2 === x) {
        reject(new TypeError('Chaining cycle'));
    }
    if (x && typeof x === 'object' || typeof x === 'function') {
        let used; //PromiseA+2.3.3.3.3 只能调用一次
        try {
            let then = x.then;
            if (typeof then === 'function') {
                //PromiseA+2.3.3
                then.call(x, (y) => {
                    //PromiseA+2.3.3.1
                    if (used) return;
                    used = true;
                    resolvePromise(promise2, y, resolve, reject);
                }, (r) => {
                    //PromiseA+2.3.3.2
                    if (used) return;
                    used = true;
                    reject(r);
                });

            } else {
                //PromiseA+2.3.3.4
                if (used) return;
                used = true;
                resolve(x);
            }
        } catch (e) {
            //PromiseA+ 2.3.3.2
            if (used) return;
            used = true;
            reject(e);
        }
    } else {
        //PromiseA+ 2.3.3.4
        resolve(x);
    }
}
Promise.defer = Promise.deferred = function () {
    let dfd = {};
    dfd.promise = new Promise((resolve, reject) => {
        dfd.resolve = resolve;
        dfd.reject = reject;
    });
    return dfd;
}
// module.exports = Promise;