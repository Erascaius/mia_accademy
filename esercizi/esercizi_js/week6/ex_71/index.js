function operazione(cb,num1,num2){
        const risultato = num1 + num2;
        console.log(risultato);
        cb()
}

function print(){
    console.log("operazioni eseguite");
}

operazione(print,2,4);