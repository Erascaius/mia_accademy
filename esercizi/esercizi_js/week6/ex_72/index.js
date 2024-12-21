function operazione(cb,num1,num2){
        const risultato = num1 + num2;
        cb(risultato);
}

function print(valore){
    console.log(valore);
}

operazione(print,2,4);