//REDUCE & SORT
//Crea un array chiamato expenses contenente numeri che rappresentano varie spese. Usa reduce per calcolare la somma totale di tutte le spese. Crea un array chiamato words contenente le seguenti parole: "banana", "apple", "cherry", "date". Usa sort per ordinare l'array words in ordine alfabetico. Stampa la somma totale delle spese e l'array words ordinato sulle console.

const expenses = [3.44, 2.20, 5.20, 7]
const sum = expenses.reduce((total, add) => total + add);

const words = ["banana", "apple", "cherry","date"]
const sorted = words.sort();

console.log(sum);
console.log(sorted);



