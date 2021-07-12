let arr = [1, 1, 2, 2, 4, 4, 4, 5, 5, 6, 7, 8, 23, 78,101,5,79,32,45]
let arr2 = [1, 4,3,2,5,6]
var bubbleSort = function(arr) {
    if(arr === null || arr.length < 2) return
    for(let end = arr.length - 1; end > 0; end--){
        for(let i = 0; i < end; i++){
            if(arr[i + 1] < arr[i]){
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp
            }
        }
    }
    return arr
    
}
//选择排序
var selectSort = function (arr) {
    if(arr === null || arr.length < 2) return 
    for(let i = 0; i < arr.length - 1; i++){
        let minIndex = i
        for(let j = i + 1; j < arr.length; j++){
            minIndex = arr[j] < arr[minIndex] ? j : minIndex
        }
        let temp = arr[i];
        arr[i] = arr[minIndex]
        arr[minIndex] = temp;
    }
    return arr
    
}

//插入排序
var insertionSort = function (arr) {
    if (arr === null || arr.length < 2) return 

    for(let i = 1; i < arr.length; i++){
        for(let j = i - 1; j >=0 && arr[j + 1] < arr[j]; j--){
            let temp = arr[j];
            arr[j+1] = arr[j]
            arr[j] = temp;
        }
    }
    return arr

}

//归并排序
var mergeSort = function (arr) {
    if (arr === null || arr.length < 2) return 
    sortProcess(arr, 0, arr.length - 1);
    
}

var sortProcess = function (arr, L, R) {
    if(L == R){
        return 
    }
    let mid = parseInt((L + R) / 2) 
    sortProcess(arr, L, mid)
    sortProcess(arr, mid + 1, R)
    merge(arr, L, mid, R)
    
}

var merge = function (arr, L, mid, R) {
    let len = R-L + 1
    let help =Array.from({ length: len }, (v, i) => 0)
    let i = 0;
    let p1 = L;
    let p2 = mid + 1;
    while (p1 <= mid && p2 <= R) {
        help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++]
        
    }
    while (p1 <= mid) {
        help[i++]  = arr[p1++]
        
    }

    while (p2 <= R) {
        help[i++] = arr[p2++]   

    }
    for(let i =0; i < help.length; i++){
        arr[L + i] = help[i]
    }
    console.log(arr, L, mid, R, help)
  
}

mergeSort(arr2)
console.log(arr2)