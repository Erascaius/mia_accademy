function messaggio(){
    console.log("messaggio con setInterval");
}

const intervallo = setInterval(messaggio,1000);

setTimeout(() => {
    clearInterval(intervallo);
    console.log("intervallo terminato");
}, 5000);