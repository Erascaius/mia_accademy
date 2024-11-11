//IF, ELSE & ELSE-IF
//Crea una variabile chiamala "score" ed utilizza il prompt per inserire un valore numerico (tip:vedi il metodo parseint su google per convertire la stringa in numero). Crea ora un blocco di controllo e verifica lo score, se è compreso tra 100 e 90 allora stampa in console la frase "ottimo voto", se lo score è compreso tra 70 e 89 allora stampa in console la frase "voto buono", se lo score è compreso tra 60 e 69 allora stampa in console la frase "voto sufficiente", se lo score è uguale o minore di 59 stampa "voto insufficiente"

let score = prompt("inserisci il tuo punteggio")

if(score >= 90 && score <= 100){
    console.log("ottimo voto");
}else if(score >= 70 && score <= 89){
    console.log("voto buono");
}else if(score >= 60 && score <= 69){
    console.log("voto sufficiente");
}else if(score < 60){
    console.log("voto insufficiente");
}else{
    console.log("valore non valido");
}