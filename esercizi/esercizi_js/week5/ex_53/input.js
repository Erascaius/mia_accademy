function myFun(...numbers){
    return numbers.reduce((somma, num) => somma + num,0);
}

console.log(myFun(1,2,3,4));


