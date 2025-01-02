async function fetchData(){
    const API_URL = "https://api.example.com/data";
    const PROXY = "https://cors-anywhere.herokuapp.com/";

    try {
        const response = await fetch(PROXY + API_URL,{
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            }
        });

        if(!response.ok){
            throw new Error("errore");
        }
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchData();