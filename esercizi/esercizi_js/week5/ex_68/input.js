function divisione(divisore,dividendo){
    
    try {
     if(divisore === 0){
        throw new Error("il divisore non può essere zero");
     }else{
        const risultato = dividendo/divisore;
        console.log(`il risultato della divisione è = ${risultato}`);
     }
    } catch (error) {
        console.error(error);
    }
}

divisione(0,10);