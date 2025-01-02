function promise(){
    return new Promise((resolve,reject) => {
        const valore = Math.floor(Math.random()*10)+1;
        if(valore > 5){
            resolve(`successo : ${valore}`);
        }else{
            reject(`insuccesso : ${valore}`);
        }
    })
}

promise()
    .then((risultato) => {
        console.log("primo then",risultato);
        return risultato+1;
    })
    .then((messaggio) => {
        console.log("secondo then",messaggio);
    })
    .catch((error) => {
        console.log(error);
    })