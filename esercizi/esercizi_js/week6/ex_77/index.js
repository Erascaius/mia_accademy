function promise(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(2);
        }, 1000);
    })
}

promise()
    .then((data) => {
        console.log("il numero è " + data);
        return data;
    }).then((data) => {
        console.log("il numero moltiplicato per 2 fa:" + data * 2);
        return data;
    }).then((data) => {
        console.log("se al numero aggiungiamo 3 diventa:" + (data + 3));
        return data;
})