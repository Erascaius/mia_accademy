async function prom1(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("promise risolta dopo 3 secondi");
        }, 2000);
    })
}

async function prom2(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("promise risolta dopo 5 secondi");
        }, 3000);
    })
}

async function asincrona(){
    const risultato1 = await prom1();
    console.log(risultato1);
    
    const risultato2 = await prom2();
    console.log(risultato2);
}

asincrona();