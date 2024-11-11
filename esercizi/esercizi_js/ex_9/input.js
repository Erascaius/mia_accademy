//RICHIESTA DI INPUT CORRETTO
//Scrivi un ciclo do-while che si ripete fino a quando non inserisci una parola(con il prompt) che sia lunga almeno 5 caratteri. Stampa la parola dopo il ciclo

let word = "";
do{
    word = prompt("parola")

}while(word.length < 5)

    console.log(word);
    