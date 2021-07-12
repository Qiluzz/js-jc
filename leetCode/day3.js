/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let max = 0, flagStr='',returnStr = ''
    while (s.length > max) {
        for (item of s) {
           flagStr += item;
           let len = flagStr.length;
           let num1 = len % 2
           let num2 = Math.floor(len / 2) 
            if (num1 === 0 && flagStr.slice(0, num2) == flagStr.slice(num2)){
              max = Math.max(max, flagStr.length) 
              if(flagStr.length > max){
                  returnStr = flagStr 
              }
               
           } else if (flagStr.slice(0, num2+1) == flagStr.slice(num2+1)){
              max = Math.max(max, flagStr.length)
                if (flagStr.length > max) {
                    returnStr = flagStr
                }
           }
        }
        flagStr = ''
        s = s.slice(1)
    }
    console.log(returnStr)
    return returnStr
};

longestPalindrome('lcnvoknqgejxbfhijmxglisfzjwbtvhodwummdqeggzfczmetrdnoetmcydwddmtubcqmdjwnpzdqcdhplxtezctvgnpobnnscrmeqkwgiedhzsvskrxwfyklynkplbgefjbyhlgmkkfpwngdkvwmbdskvagkcfsidrdgwgmnqjtdbtltzwxaokrvbxqqqhljszmefsyewwggylpugmdmemvcnlugipqdjnriythsanfdxpvbatsnatmlusspqizgknabhnqayeuzflkuysqyhfxojhfponsndytvjpbzlbfzjhmwoxcbwvhnvnzwmkhjxvuszgtqhctbqsxnasnhrusodeqmzrlcsrafghbqjpyklaaqximcjmpsxpzbyxqvpexytrhwhmrkuybtvqhwxdqhsnbecpfiudaqpzsvfaywvkhargputojdxonvlprzwvrjlmvqmrlftzbytqdusgeupuofhgonqoyffhmartpcbgybshllnjaapaixdbbljvjomdrrgfeqhwffcknmcqbhvulwiwmsxntropqzefwboozphjectnudtvzzlcmeruszqxvjgikcpfclnrayokxsqxpicfkvaerljmxchwcmxhtbwitsexfqowsflgzzeynuzhtzdaixhjtnielbablmckqzcccalpuyahwowqpcskjencokprybrpmpdnswslpunohafvminfolekdleusuaeiatdqsoatputmymqvxjqpikumgmxaxidlrlfmrhpkzmnxjtvdnopcgsiedvtfkltvplfcfflmwyqffktsmpezbxlnjegdlrcubwqvhxdammpkwkycrqtegepyxtohspeasrdtinjhbesilsvffnzznltsspjwuogdyzvanalohmzrywdwqqcukjceothydlgtocukc')