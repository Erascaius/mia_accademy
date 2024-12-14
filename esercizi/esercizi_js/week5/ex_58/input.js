/*  dichiarare un array di oggetti rappresentante una lista di persone in formato JSON. 
    Convertire questa stringa JSON in un array di oggetti JavaScrpit .
    Aggiungere una nuova persona all'array.
    Riconvertire l'array aggiornato in una stringa JSON.
    Stampare la stringa JSON aggiornata in console.
*/

const usersJson = `[{"nome":"andrea","cognome":"bruno","eta":"25"},{"nome":"matteo","cognome":"verdi","eta":"23"},{"nome":"valentina","cognome":"rossi","eta":"26"}]`;

let users = JSON.parse(usersJson);

users.push({
    nome:"claudio",
    cognome:"blu",
    eta:30
})

const updateUsers = JSON.stringify(users);

console.log(updateUsers);


