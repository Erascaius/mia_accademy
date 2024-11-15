//AGGIUNGI METODI E PROPRIETÁ
//Aggiungi una proprietà chilometraggio alla classe Automobile. Aggiungi un metodo aggiungiChilometri(km) che aumenta il chilometraggio dell'automobile. Aggiungi un metodo mostraChilometraggio() che restituisce il chilometraggio attuale dell'automobile

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

const auto1 =  new Automobile("Toyota", "Yaris", 2016)
auto1.aggiungiChilometri(1000);
console.log(auto1.descrizione());
console.log(auto1.mostraChilometraggio());
