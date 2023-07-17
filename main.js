function isPalendrom(str){
    if(str.length===1){   return true }
    if(str.length===2) { return true}
    if (str[0]===str.slice(-1)){return isPalendrom(str.slice(1,-1)) }
    else return false
    }
    
    console.log(isPalendrom("djgjdd"))