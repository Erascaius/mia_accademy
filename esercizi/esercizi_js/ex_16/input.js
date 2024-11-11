//POPOLAMENTO ARRAY 
//Crea un array vuoto e chiamalo "parole" e, tramite un ciclo for, popolalo di 5 parole (usa il prompt per inserire le parole). Quando è finito il ciclo esegui un nuovo ciclo che scorre l'array popolato e stampa a video solo le parole che hanno un numero dispari di lettere(tip: usa sempre il metodo length per contare le lettere di una parola)

const parole = []

for(let i = 0; i < 5; i++){
    parole.push(prompt("inserisci parola"));
}

for(let i = 0; i <= parole.length ; i++){
    if(parole[i] % 2 != 0){
        document.write(parole[i]);
    }
}
