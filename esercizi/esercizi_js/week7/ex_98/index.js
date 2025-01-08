localStorage.setItem("user", "andrea");
sessionStorage.setItem("data", "matteo");

const localItem = localStorage.getItem("user");
const sessionItem = sessionStorage.getItem("data");

console.log(localItem, sessionItem);

localStorage.removeItem("user");
sessionStorage.removeItem("data");

console.log(localStorage.getItem("user"),sessionStorage.getItem("data"));

