//VERIFICA IL PUNTEGGIO
//Riprendi l'esercizio "if, else & else-if" e riscrivilo usando lo switch case

let score = prompt("inserisci valore")

switch(true){
    case score >100:
        console.log("valore non valido");
        break;

    case score >=90:
        console.log("ottimo voto");
        break;
    
    case score >=70:
        console.log("voto buono");
        break;

    case score >=60:
        console.log("voto sufficiente");
        break;

    case score <59:
        console.log("voto insufficiente");
        break;
    
    default: "voto non valido"
    break;
}