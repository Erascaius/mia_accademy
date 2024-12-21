function operazione(numero){
    try {
        if(numero < 10){
            throw new Error("numero troppo grande");
        }else{
            console.log("il numero va bene");
        }
    } catch (error) {
        console.error(error);
    }finally{
        console.log("operaione completata");
    }
}

operazione(11);