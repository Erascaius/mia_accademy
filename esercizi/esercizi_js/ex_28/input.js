//FOREACH & MAP
//Crea un array chiamato numbers contenente i numeri da 1 a 5. Usa forEach per stampare ogni numero moltiplicato per 2. Usa map per creare un nuovo array squaredNumbers contenente i quadrati di ogni numero in numbers. Stampa il nuovo array squaredNumbers sulla console.

const numbers = [1,2,3,4,5]

numbers.forEach((numbers) => {
    console.log(numbers*2);
});

const squaredNumbers = numbers.map((numbers) =>{
    numbers *= numbers
    console.log(numbers);
})

