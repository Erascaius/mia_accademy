//FILETER & FIND
//Crea un array chiamato students contenente oggetti con le seguenti proprietà: name e grade. Usa filter per creare un nuovo array passedStudents contenente solo gli studenti con una grade maggiore o uguale a 60. Usa find per trovare il primo studente con un grade minore di 60. Stampa il nuovo array passedStudents e lo studente trovato con find sulla console.

const students = [
    { name: "andrea", grade:80},
    { name: "matteo", grade:60},
    { name: "gabriele", grade:65},
    { name: "mattia", grade:50}
]

const passedStudents = students.filter(student => student.grade >= 60);
const notPassedStudents = students.find(student => student.grade < 60);

console.log(passedStudents);
console.log(notPassedStudents);


