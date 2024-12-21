function promise1(){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve("promise risolta");
        }, 2000);
    }) 
}

promise1().then((data) =>{
    console.log(data);
}).catch((error) =>{
    console.error(error);
})