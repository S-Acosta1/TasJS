function sumAll(num1, num2)
{
    if (num1<num2){
        key=1;
    }
    else if (num1===num2){
        key=2;
    }
    else 
    {
        key=3;
    }
    result=0;
    switch (key ) {
        case 1:
            for (let i=num1; i<=num2;i++){
                result=i+result;
            }
            console.log(result);
            break;
        case 2:
            console.log(num1);
            break;
        case 3:
            console.log("el primer numero debe ser mayor al segundo");
            break;
        default:
            break;
    } 
}