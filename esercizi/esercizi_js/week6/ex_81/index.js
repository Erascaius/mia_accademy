function promise(boolean){
    return new Promise((resolve,reject) => {
        if(boolean){
            resolve("risolta");
        }else{
            reject("non risolta");
        }
    })
}

promise(false)
    .then((data) => {
    console.log(data);
})
    .catch((error) => {
    console.log(error);
})