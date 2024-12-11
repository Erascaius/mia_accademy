const utente = {
    nome:"andrea",
    citta:"roma",
}

let {nome, citta = "bologna", eta = 25} = utente;

console.log(nome,citta,eta);