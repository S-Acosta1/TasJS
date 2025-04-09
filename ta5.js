function leapYears(num){
    if(num%4===0 || (num%100===0 && num%400===0)){
        console.log("True")
    }
    else{
        console.log("False")
    }
}