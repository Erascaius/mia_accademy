const obj = {
    nome:"andrea",
    cognome:"bruno",
    età:"25",
    hobby:"pc"
}

let {nome,cognome,...rest} = obj;

console.log("il suo nome è: ",nome,"il suo cognome è: ",cognome,"altre informazioni: ",rest);

