var findMedianSortedArrays = function (nums1, nums2) {
    let midNum;
    const sumArr = [].concat(nums1, nums2)
    sumArr.sort((a, b) => {
        return a - b
    })

    if (sumArr.length % 2 ){
        midNum = sumArr[Math.floor(sumArr.length / 2)]
    }else{
        sumIndex = sumArr.length / 2
        midNum = (sumArr[sumIndex] + sumArr[sumIndex-1])/2
    }
    return midNum
}
console.log(findMedianSortedArrays([], [1])) 
