async function fetchData() {
    const API_URL = "https://jsonplaceholder.typicode.com/posts";
    
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Errore nella richiesta: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log("Dati restituiti dall'API:", data);
    } catch (error) {
        console.error("Errore durante il fetch:", error);
    }
}

fetchData();
