//OBJECT.ENTRIES()
//Utilizza l'oggetto student creato in precedenza. Usa Object.entries() per ottenere tutte le coppie chiave-valore dell'oggetto student. Stampa l'array delle coppie chiave-valore sulla console. Itera sull'array delle coppie chiave-valore e stampa ogni coppia in un formato leggibile (ad esempio, "name:Mario Rossi")

const student = {
    name:"andrea",
    age:"24",
    grade:"degree",
    school:"Armellini",
}

const entries = Object.entries(student);

console.log(entries);

entries.forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
