function ajax(url) {
    return new Promise((resolve,reject)=>{
        var xhr = new XMLHttpRequest()
        xhr.open('GET',url)
        xhr.responseType = 'json'
        xhr.onload = function () {
            if(this.status === 200){
                resolve(this.response)
            }else{
                console.log(this.statusText)
                reject(new Error(this.statusText))
            }
        }
        xhr.send()
    })

  
}
// ajax('./myPromise/api/user.json').then(value => console.log(value))

const promise = new Promise((resolve,reject)=>{
    reject(new Error('dd'))
})
// promise.then(value => console.log(value), value => console.log(value),)