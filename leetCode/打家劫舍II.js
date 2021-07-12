/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let len = nums.length;
    let i = 0
    let num1 = 0
    let num2 = 0
    while (i < len) {
        if(i % 2 === 0){
            
            num1 += nums[i]  
            console.log(i, nums[i], num1) 
        }else{
            num2 += nums[i]  
        }
        i++
    }
    if(len % 2 !== 0){
        num1 = num1 - nums[len-1]
    }
    console.log(num1, num2, Math.max(num1, num2))
    return Math.max(num1, num2)
};

let nums = [2, 3, 2]
rob(nums)