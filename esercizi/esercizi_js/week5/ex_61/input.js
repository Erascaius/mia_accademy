/*  Scrivere una funzione che accetti un oggetto rappresentante una persona e restituisca una stringa formattata utilizzando i template literals.
    Chiamare la funzione con un oggetto di esempio e stampare la stringa risultante nella console
*/

function userDescription(utente){
    return `nome: ${utente.nome}, cognome: ${utente.cognome}`;
}

const user = {
    nome:"andrea",
    cognome:"bruno"
};  

const description = userDescription(user);
console.log(description);