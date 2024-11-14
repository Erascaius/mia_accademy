//COUNTER
//Crea una funzione chiamata createCounter che restituisce un oggetto con due metodi: increment e decrement. Utilizza una variabile locale chiamata count per tenere traccia del conteggio. Il metodo increment dovrebbe aumentare count di 1  e restituire il nuovo valore. Il metodo decrement dovrebbe diminuire count di 1 e restituire il nuovo valore.

function createCounter() {
    let count = 0;

    return {
        increment: function() {
            count += 1; 
            return count;
        },
        decrement: function() {
            count -= 1;
            return count; 
        }
    };
}

const counter = createCounter();

console.log(counter.increment());

