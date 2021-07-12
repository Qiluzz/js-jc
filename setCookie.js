function setCookie(name, value, expires) {
    let d = new Date();
    d.setDate(d.getDate() + expires)
    // document.cookie = name + '=' +value + ';path=/;expires=' + d.toGMTString();
    console.log(name + '=' + value + ';path=/;expires=' + d.toGMTString())

}

let obj ={name:'222',pwd:'333'}

setCookie('init',JSON.stringify(obj),7)

function getCookie(name) {
    let name  = name + '=';
    let arr = document.cookie.split(";");
    for(let i= 0;i < arr.length; i++){
        let c = arr[i].trim()
        if(c.indexOf(name) == 0) return c.substring(name.length,c.length)

    }
    return ""
}