function getSum(array){
    let result= array.reduce((acumulator, num)=>acumulator+num,0);
    console.log(result);
}
const array = [1,2,3,4,5]