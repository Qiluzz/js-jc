/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let newArr = [''],subArr = '',rArr= [[]]
    for(let i=0; i< nums.length; i++){
        if (!newArr.includes(String(nums[i]))){
            newArr.push(String(nums[i]) )
        }
        subArr += nums[i]
        for(let j = i + 1; j < nums.length; j++){
            subArr += nums[j]
            let subStr = String(nums[i]) + nums[j]
            if (!newArr.includes(subStr)) {
                newArr.push(subStr)
            }
            if(!newArr.includes(subArr)){
                newArr.push(subArr)
            }
        }
        subArr = ''
    }
    console.log(newArr)
    for(let k =0;k<newArr.length; k++){
        newArr[k] = newArr[k].split('')
    }
    return newArr
}

let c = [-1, 1, 2]
let b = subsetsWithDup(c)
console.log(b)