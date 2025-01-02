function promise(boolean){
    return new Promise((resolve,reject) => {
        if(boolean){
            resolve("promise risolta");
        }else{
            reject("promise respinta");
        }
    })
}

async function asincrona(boolean){
    try {
        console.log("inizio funzione");
       const result = await promise(boolean);
       console.log(result);
    } catch (error) {
        console.error(error);
    }
}

asincrona(false);