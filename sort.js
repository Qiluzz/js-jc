function bubbleSort(arr) {
    let len = arr.length,temp;
    for(let i= 0; i<len;i++){
        for(let j=i+1; j<len; j++){
            if(arr[j]<arr[i]){
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }
    console.log(arr)
    
}
bubbleSort([1,3,44,4,2,12])

var a= 0;
var b = async()=>{
    console.log('000000')
    a = a + await 10;
    console.log('2',a);
    a = (await 10) + a;
    console.log('3',a);
}
b();
a++;
console.log('1',a)
setTimeout(() => {
    console.log(a)
}, 2000);