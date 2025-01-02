function prom1(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("risolta dopo due secondi");
        }, 2000);
    })
}

function prom2(){
    return new Promise((resolve,reject) => {
        resolve("promise risolta subito");
    })
}

Promise.all([prom1(),prom2()])
    .then(data => {
        console.log(data[0]);
        console.log(data[1]);
    })
    .catch(error => {
        console.log(error);
    })