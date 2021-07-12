[[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]]
3
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let len = matrix.length,subLen = matrix[0].length, arrIndex = undefined;
    if (matrix[0][0] > target || matrix[len-1][subLen-1] < target ) return false
    for(let i = 1; i< matrix.length; i++){
       if(matrix[i][0] > target){
           arrIndex = i
           break
       }
    } 
    if(!arrIndex) {
        arrIndex = len
    }   
    console.log(arrIndex, '...', matrix[arrIndex - 1])
    let arr = matrix[arrIndex - 1]
    for(let j=0; j< arr.length; j++){
        if(arr[j] === target){
            return true
        }
    }
    return false
};
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let len = height.length, maxNum = 0,lastNum = height[len-1];
    for(let i =0; i< len; i++){
        for(let j = len-1; j > i; j--){
            if(lastNum > height[j]) continue
            let h = Math.min(height[i], height[j])
            let area = h * (j-i) 
            maxNum = Math.max(area, maxNum)
        }
    }
    return maxNum
}

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea2 = function (height) {
    let i =0,j = height.length -1,maxNum = 0
    while (j > i) {
        let num1 = height[j]
        let num2 = height[i]
        let h = num1 > num2 ? num2 : num1;
        maxNum = Math.max(maxNum, h * (j - i))
        if (num1 > num2){
            i++
        }else{
            j--
        } 
    }
    return maxNum
}

let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7]
let c = maxArea2(arr)
console.log(c)
