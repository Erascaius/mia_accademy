function promise(){
    return new Promise((resolve,reject) => {
        reject("respinta");
    })
}

promise().catch((error) => {
    console.error(`la promise non è valida: ${error}`);
})