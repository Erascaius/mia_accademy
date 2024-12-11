//CARICO MASSIMO
//Aggiungi una proprietà specifica caricoMassimo per rappresentare il carico massimo che il camion può trasportare. Sovrascrivi il metodo descrizione() per includere anche il carico massimo nella descrizione del camion. Aggiungi un metodo carico(kg) che aumenta il carico attuale del camion, ma solo se il nuovo carico non supera il carico massimo.

class Automobile{
    constructor(marca,modello,anno,chilometri = 0){
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this._chilometri = chilometri;
        this.contatoreChiamate = 0;
    }
    descrizione(){
        return `Questa è una ${this.marca} ${this.modello} del ${this.anno}.`;
    }
    aggiungiChilometri(km){
        this._chilometri += km;
        this.contatoreChiamate++;
        this._contrllaChilometri();
    }
    get chilometri() {
        return this._chilometri;
      }
    set chilometri(nuovoChilometraggio) {
        if (nuovoChilometraggio >= this.chilometri) {
            this.chilometri = nuovoChilometraggio;
        } else {
            console.log(`il valore è inferiore ai chilometri presenti nella vettura: azione impossibile`);
        }
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
        if(this._chilometri > 100000){
            console.log("necessità di revisione o rottamazione");
        }else{
            console.log("l'automobile non ha superato il limite di chilometri necessari per una revisione");
            
        }
    }
    static confrontaChilometraggio(auot1,auto2){
        if (auto1._chilometri > auto2._chilometri) {
            return `la ${auto1.marca} ${auto1.modello} ha un chilometraggio maggiore della ${auto2.marca} ${auto2.modello}.`;
          } else if (auto1._chilometri < auto2._chilometri) {
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

class Camion extends Automobile{
    constructor(marca,modello,anno,chilometri,caricoMassimo){
        super(marca,modello,anno,chilometri)
        this.caricoMassimo = caricoMassimo;
        this.caricoAttuale = 0;
    }
    descrizione(){
        return `${super.descrizione()} il carico massimo è di ${this.caricoMassimo}kg`
    }
    carico(kg){
        if(this.caricoAttuale + kg <= this.caricoMassimo){
            this.caricoAttuale += kg;
            console.log(`abbiamo aggiunto ${kg}kg, il carico attuale è di ${this.caricoAttuale}kg`);     
        } else{
            console.log("carico massimo raggiunto, impossibile aggiungere altro");
        }
    }
}

const auto1 = new Automobile("Honda", "Jazz", 2012);
auto1.aggiungiChilometri(2100);

const auto2 = new Elettrica("Ford", "Mustang Mach-E", 2022)
auto2.ricarica(5000);

const auto3 = new Camion("Mercedes", "Actros", 2006, 6000, 10000)
auto3.carico(4000);
console.log(auto3.descrizione());

