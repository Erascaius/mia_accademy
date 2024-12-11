//AUTOMOBILE
//Crea una classe Automobile con le seguenti proprietà: marca, modello, anno. Crea un costruttoreper inizializzare queste proprietà. Aggiungi un metodo descrizione() che restituisce una stringa con una descrizione dell'automobile

class Automobile{
    constructor(marca,modello,anno){
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
    }
    descrizione(){
        return `Questa è una ${this.marca} ${this.modello} del ${this.anno}.`;
    }
}

const auto1 =  new Automobile("Toyota", "Yaris", 2016)
console.log(auto1.descrizione());
