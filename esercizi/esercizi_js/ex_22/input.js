//FUNZIONI ANNIDATE
//Crea una funzione chiamata outerFunction che accetta un parametro x. All'interno di outerFunction, crea una funzione chiamata innerFunction che accetta un parametro y. innerFunction deve retituire la somma di x e y. outerFunction deve restituire innerFunction.

function outerFunction(x){
    function innerFunction(y){
        return x + y;
    }
    return innerFunction
}
const output = outerFunction(5)
console.log(output(10));


