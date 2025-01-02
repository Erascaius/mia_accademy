function prom1(){
    return new Promise((_,reject) => {
        reject ("promise non risolta");
    })
}

function prom2(){
    return new Promise((resolve) => {
        resolve ("promise risolta");
    })
}

function prom3(){
    return new Promise((resolve) => {
        resolve ("promise risolta");
    })
}

Promise.allSettled([prom1(),prom2(),prom3()])
    .then(risultati => {
        console.log("tutti i risultati: ");
        risultati.forEach((risultato,index) => {
            if (risultato.status === "fulfilled") {
                console.log(`promise ${index + 1} risolta:`, risultato.value);
            } else {
                console.log(`promise ${index + 1} rifiutata:`, risultato.reason);
            }
        })
    })