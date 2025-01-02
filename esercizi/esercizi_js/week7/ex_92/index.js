async function fetchData(){
    const API_URL = "https://api.example.com/data";

    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

fetchData();