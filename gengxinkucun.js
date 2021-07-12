function updateInventory(arr1, arr2) {
    // 所有的存货都必须记帐，否则你将被解雇！
        let curObj = {},newArr=[]
        arr1.map(item=>{
            curObj[item[1]] = item[0]
        })
        arr2.map(item=>{
            if(curObj[item[1]]){
                curObj[item[1]] = curObj[item[1]] + item[0]
            }else{
                curObj[item[1]] =  item[0]
            }
        })
        let keysArr = Object.keys(curObj).sort()
        keysArr.map(item=>{
            newArr.push([curObj[item],item])
        })
        console.log(newArr)
        return newArr;
    }
    
    // 两个货物列表示例
    var curInv = [
        [21, "Bowling Ball"],
        [2, "Dirty Sock"],
        [1, "Hair Pin"],
        [5, "Microphone"]
    ];
    
    var newInv = [
        [2, "Hair Pin"],
        [3, "Half-Eaten Apple"],
        [67, "Bowling Ball"],
        [7, "Toothpaste"]
    ];
    
    updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);