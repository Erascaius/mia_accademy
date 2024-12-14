const users = [{
    nome:"andrea",
    cognome:"bruno"
},
{
    nome:"matteo",
    cognome:"rossi"
}]

console.table(users);


console.group();
console.log("variabile_1");
console.group();
console.log("variabile_2_dentro_1");
console.groupEnd();
console.groupEnd();
