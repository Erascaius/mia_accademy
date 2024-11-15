//SOTTOCLASSE ELETTRICA
//Crea una sottoclasse chiamata Elettrica che estende la classe Automobile. Aggiungi una nuova proprietà autonomia per rappresentare l'autonomia della batteria in km. Sovrascrivi il metodo descrizione() per includere anche l'autonomia. Aggiungi un metodo ricarica(km) che aumenta l'autonomia della batteria.

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

const auto1 =  new Automobile("Toyota", "Yaris", 2016)
auto1.aggiungiChilometri(1000);
console.log(auto1.descrizione());
console.log(auto1.mostraChilometraggio());

const auto2 = new Elettrica("Tesla","Model Y",2024,"",1000)
auto2.aggiungiChilometri(3000);
console.log(auto2.descrizione());
console.log(auto2.mostraChilometraggio());


