async function fetchData(){
    const API_URL = "https://jsonplaceholder.typicode.com/posts";

    try {
        const response = await fetch(API_URL);
        if(response.ok){
            throw new Error("errore");
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchData();