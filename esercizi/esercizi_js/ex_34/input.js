//SALUTA
//Aggiungi un metodo saluta() alla classe Automobile utilizzando prototype chain. Questo metodo dovrebbe restituire una stringa con un saluto che include la marca e il modello dell'automobile. Verifica che tutte le istanze della classe Automobile(e le sue sottoclassi) possano accedere a questo metodo.

class Automobile{
    constructor(marca,modello,anno,chilometri = 0){
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometri = chilometri;
    }
    descrizione(){
        return `Questa è una ${this.marca} ${this.modello} del ${this.anno}.`;
    }
    aggiungiChilometri(km){
        this.chilometri += km
    }
    mostraChilometraggio(){
        return `il chilometraggio della vettura è di ${this.chilometri}km.`
    }
    saluta(){
        return `Ciao ${this.marca} ${this.modello} `
    }
}

class Elettrica extends Automobile{
    constructor(marca, modello, anno, chilometri, autonomia){
        super(marca, modello, anno, chilometri)
        this.autonomia = autonomia;
    }

    descrizione(){
        return `${super.descrizione()} ha un'autonomia di ${this.autonomia}km`
    }

    ricarica(km){
        this.autonomia += km;
    }
}

const auto1 = new Automobile("Honda", "Jazz", 2012);
auto1.aggiungiChilometri(6000);
console.log(auto1.saluta());

const auto2 = new Elettrica("Ford", "Mustang Mach-E", 2022)
auto2.ricarica(5000);
auto2.aggiungiChilometri(1000);
console.log(auto2.saluta());
