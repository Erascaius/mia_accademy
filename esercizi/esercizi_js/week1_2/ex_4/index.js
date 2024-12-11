//SCOPING DELLE VARIABILI
//Crea una variabile let e chiamala "outside" ed assegna un valore numerico a tua scelta. Successivamente crea un blocco(apri e chiudi le parentesi graffe). All'interno dell blocco appena creato definisci un'altra variabile let e chiamala "inside" ed assegna un valore numerico a tua scelta differente dalla precedente variabile. Sempre all'interno del blocco stampa a console le due variabili. Esegui la stampa delle due varaibili anche all'esterno del blocco

let outside = 5;
{
    let inside = 10;
    console.log(outside);
    console.log(inside);
}
console.log(outside);
console.log(inside); //in uno scope diverso quindi non visualizzabile

