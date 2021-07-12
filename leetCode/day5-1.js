/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    // let hNums = Math.floor(s.length / (numRows * 2 - 2)) 
    // let lNums = s.length % (numRows * 2 - 2)
    // let sNum = lNums < numRows ? 1 : lNums % numRows
    // let sumH = hNums * (numRows - 1) + sNum
    // console.log(hNums, lNums, sNum, sumH)
    // let zeroArr = []
    // for(let i =0; i< numRows; i++){
    //     zeroArr[i] = Array.from({ length: sumH }, (v, i) => 0);
    // } 
    // let k = 0, p=0;
    // for(let j=0; j< s.length; j++){
    //     if (k < numRows && ){
    //         zeroArr[k][p] = s[j]
    //         k++
    //     }else{

    //     }
        
    // }
    // console.log(zeroArr)
};

let s = "PAYPALISHIRING", numRows = 4;
convert(s, numRows)