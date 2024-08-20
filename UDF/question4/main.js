function  Factorial(number){
    let value=1;
    for(let i=1;i<=number;i++){
        value=value*i;
    }
    return value;
}


let result=Factorial(5);
console.log("Factorial of 5: ",result);