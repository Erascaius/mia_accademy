async function fetchData(){
    const API_URL = "https://jsonplaceholder.typicode.com/posts";
    const data = {
        title: "nuovo",
        body: "nuovo contenuto",
        id: 1
    }

    try {
        const response = await fetch(API_URL, {
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error(`Errore nella richiesta: ${response.status} ${response.statusText}`);
        }
        const responseData = await response.json();
        console.log("Dati restituiti dall'API: ", responseData);
    } catch (error) {
        console.error("Errore durante la richiesta POST", error);
    }
}

fetchData();