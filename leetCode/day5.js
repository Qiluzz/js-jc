/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
    let len = nums.length;
    // for (let i = 0; i < len; i++) {
    //     for (let j = len - 1; j > i; j--) {
    //         if (nums[j] > nums[i]) {
    //             console.log(nums.slice(i+1, j), nums[j],'---')
    //             let ishas = nums.slice(i+1, j).some(item => item > nums[j])
    //             if (ishas) return ishas
    //         }
    //     }

    // }
    // return false

    numsi = nums[0]
    for(let i = 1; i <len; i++){
        for(let j = len-1; j > i; j--){
            if (numsi < nums[j] && nums[j] < nums[i]){
                return true
            }
        }
        numsi = Math.min(numsi, nums[i])
    }
    return false

};
let nums = [3, 1, 4, 2]

console.log(find132pattern(nums))