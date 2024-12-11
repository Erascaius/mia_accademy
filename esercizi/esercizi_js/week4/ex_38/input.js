//MOSTRA CONTATORE
//Aggiungi un metodo pubblico mostraContatoreChiamate() che restituisce il numero di volte che aggiungiChilometri(km) è stato chiamato.

class Automobile{
    constructor(marca,modello,anno,chilometri = 0){
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometri = chilometri;
        this.contatoreChiamate = 0;
    }
    descrizione(){
        return `Questa è una ${this.marca} ${this.modello} del ${this.anno}.`;
    }
    aggiungiChilometri(km){
        this.chilometri += km;
        this.contatoreChiamate++;
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
    static confrontaChilometraggio(auot1,auto2){
        if (auto1.chilometri > auto2.chilometri) {
            return `la ${auto1.marca} ${auto1.modello} ha un chilometraggio maggiore della ${auto2.marca} ${auto2.modello}.`;
          } else if (auto1.chilometri < auto2.chilometri) {
            return `la ${auto2.marca} ${auto2.modello} ha un chilometraggio maggiore della ${auto1.marca} ${auto1.modello}.`;
          } else {
            return `Entrambe le automobili hanno lo stesso chilometraggio.`;
          }
    }
    mostraContatoreChiamate(){
        return `il metodo aggiungi chilometri è stato utilizzato ${this.contatoreChiamate} volte/a`
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
auto1.aggiungiChilometri(2100);
console.log(auto1.mostraContatoreChiamate());


const auto2 = new Elettrica("Ford", "Mustang Mach-E", 2022)
auto2.ricarica(5000);
auto2.aggiungiChilometri(1320);