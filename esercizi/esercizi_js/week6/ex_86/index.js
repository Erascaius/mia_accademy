function promise(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("risolta dopo 2 secondi");
        }, 2000);
    });
}

async function asincrona(){
    const messaggio = await promise();
    console.log(messaggio);
}

asincrona();