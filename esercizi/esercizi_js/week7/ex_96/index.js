document.cookie = "username=andrea; expires=wed, 08 Jen 2025 23:00:00 UTC";

const cookie = document.cookie;

console.log(cookie);

document.cookie = "username=; expires=wed, 03 Jen 1970 23:00:00 UTC";

console.log(cookie);