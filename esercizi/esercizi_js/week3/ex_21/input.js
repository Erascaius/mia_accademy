//ITERAZIONE DELLE PROPRIETÁ
//Utilizza il "for in" per iterare le proprietà dell'oggetto e stampare all'interno del ciclo sia il nome della proprietà che il suo valore in console

const person ={
    name: "andrea",
    age: "24",
    city: "roma"
}

for(const proprietà in person){
    console.log(`${proprietà}: ${person[proprietà]}`);
    
}