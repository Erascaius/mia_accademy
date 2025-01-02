function promise1(){
    return new Promise((resolve, reject) =>{
        let a = 11
        if(a <= 10){
            resolve("promise risolta");
        }else{
            reject("promise respinta");
        }
    }) 
}

promise1().then((data) =>{
    console.log("promise nel then, " + data);
}).catch((error) =>{
    console.error("promise nel catch, " + error);
})