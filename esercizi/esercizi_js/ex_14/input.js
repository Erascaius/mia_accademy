//SOMMA I NUMERI
//Riprendi l'array precedente e somma tutti i suoi valori con un ciclo for(tip: usa il metodo length sull'array per controllare il ciclo for). Stampa la somma dei numeri contenuti nell'array dopo il for

const numeri = [2,4,6,8];
let result = 0;

for(let i = 0; i < numeri.length; i++){
    result = result + numeri[i];
}

console.log(result);

