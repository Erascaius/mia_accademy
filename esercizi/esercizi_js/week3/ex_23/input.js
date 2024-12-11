//PERSISTENZA DELLE VARIABILI LOCALI
//Utilizza il codice dell'esercizio precedente(Funzioni annidate). Modifica OuterFunction in modo che accetti un secondo parametro initialValue e memorizzi il valore iniziale in una variabile chiamata result. innerFunction dovrebbe aggiungere y a result anzichè restituire semplicemente la somma di x e y. innerFunction dovrebbe restituire result. outerFunction dovrebbe restituire innerFunction.

function outerFunction(x, initialValue){
    let result = initialValue;
    function innerFunction(y){
        result += y;
        return result;
    }
    return innerFunction
}
const output = outerFunction(5,5)
console.log(output(10));