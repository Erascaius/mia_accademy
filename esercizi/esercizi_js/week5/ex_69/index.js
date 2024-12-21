function controlloStringa(stringa){
    try {
        if(stringa.length < 5){
            throw new Error("la stringa deve essere almeno di 5 caratteri");
        }else if(typeof(stringa) != "string"){
            throw new TypeError("non è il tipo di dato che vogliamo");
        }else{
            console.log("è corretto");
        }
    } catch (error) {
        console.error(error);
    }
}

controlloStringa("ciao");