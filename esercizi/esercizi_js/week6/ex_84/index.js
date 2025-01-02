function prom1(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("promise risolta in 3 secondi");
        }, 3000);
    })
}

function prom2(){
    return new Promise((resolve,reject) => {
        resolve("promise risolta subito");
    })
}

Promise.race([prom1(),prom2()])
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error);
    })