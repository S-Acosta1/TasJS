function getOdds(array){
    arraySecondary=[];
    for (let num of array)
    {
        if (num%2 != 0){
            arraySecondary.push(num);
        }
    }
    for (let num of arraySecondary){
        console.log(num);
    }
}
const array=[1,2,3,4,5,6,7,-2,-3,-9,12]