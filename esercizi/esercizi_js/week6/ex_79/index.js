function promise(){
    return new Promise((resolve,reject) => {
        const valore = Math.floor(Math.random()*10)+1;
        if(valore <= 5){
            resolve("il numero è minore di 5");
        }else{
            reject("il numero è maggiore di 5");
        }
    })
}

promise().then((data) => {
    console.log(data);
}).catch((error) => {
    console.error(error)
})