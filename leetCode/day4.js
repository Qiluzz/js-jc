let a = [[1, [1,[3]]], 2, [1, 1]]

function arrayFlat(arr,newArr = []) {
    console.log(arr, newArr)
    for(let i = 0; i < arr.length; i++){
        if(!Array.isArray(arr[i])){
            newArr.push(arr[i])
           
        }else{
            let flat1 = arrayFlat(arr[i], newArr)
            newArr.push(flat1) 
        }
        console.log(arr[i],newArr,'****')
        
    }

    
}
const newArr=[]
arrayFlat(a, newArr)
console.log(newArr)

function flatten(sourceArray, flattenedArray = []) {
    for (const element of sourceArray) {
        if (Array.isArray(element)) {
            flatten(element, flattenedArray);
        } else {
            flattenedArray.push(element);
        }
    }
    return flattenedArray;
}
const arr = [[0], 1, 2, [3, [4, 5]], 6];
console.log(flatten(arr))