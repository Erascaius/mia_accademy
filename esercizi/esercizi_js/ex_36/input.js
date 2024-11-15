//METODO PROTETTO
//Aggiungi un metodo protetto _controllaChilometri() alla classe Automobile che verifica se il chilometraggio supera un certo valore(ad esempio 100,000 km) e restituisca un avviso. Utilizza questo metodo nella sottoclasse Elettrica per mostrare un avviso se il chilometraggio supera il limite.

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
        this.chilometri += km;
        this._contrllaChilometri();
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
    _contrllaChilometri(){
        if(this.chilometri > 100000){
            console.log("necessità di revisione o rottamazione");
        }else{
            console.log("l'automobile non ha superato il limite di chilometri necessari per una revisione");
            
        }
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
auto1.aggiungiChilometri(110000);
console.log(auto1.mostraChilometraggio());

const auto2 = new Elettrica("Ford", "Mustang Mach-E", 2022)
auto2.ricarica(5000);
auto2.aggiungiChilometri(1000);
console.log(auto2.mostraChilometraggio());