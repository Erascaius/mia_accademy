//METODO PRIVATO
//Aggiungi un metodo privato #calcolaEtà() alla classe Automobile che calcola e restituisce l'età dell'automobile basata sull'anno di fabbricazione. Aggiungi un metodo pubblico mostraEtà() che utilizza il metodo privato #calcolaEtà() per mostrare l'età dell'automobile.

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
    #calcoloEtà(){
        const data = new Date().getFullYear();
        return data - this.anno;
    }
    mostraEtà(){
        const etàAuto = this.#calcoloEtà();
        return `questa automobile ha ${etàAuto} anni`;
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
console.log(auto1.mostraEtà());

const auto2 = new Elettrica("Ford", "Mustang Mach-E", 2022)
auto2.ricarica(5000);
auto2.aggiungiChilometri(1000);
console.log(auto2.mostraEtà());