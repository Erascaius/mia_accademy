sessionStorage.setItem("user","andrea");

const sessionItem = sessionStorage.getItem("user");

console.log(sessionItem);

sessionStorage.removeItem("user");

console.log(sessionStorage.getItem("user"));
