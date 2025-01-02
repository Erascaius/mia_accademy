function promise(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(6);
        }, 1000);
    })
}

promise().then((numero) => {
    if(numero %2 === 0){
       return numero * 2;
    }else{
       return numero + 1;
    }
}).then((modificato) => {
    console.log(`numero modificato ${modificato}`);
})