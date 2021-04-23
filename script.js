//Oggetto: studente

var student = {
  firstname: "Marco",
  lastname: "Bianchi",
  age: 23,
};

//ciclo for-in per stampare tutte le proprietà dello studente

for (var key in student) {
  console.log("Chiave: " + key + " Valore: " + student[key]);
  console.log("**********************");
}

//array di oggetti

var students = [
  {
    firstname: "Marco",
    lastname: "Rossi",
    age: 34,
  },
  {
    firstname: "Paolo",
    lastname: "Verdi",
    age: 22,
  },
  {
    firstname: "Davide",
    lastname: "Moscardelli",
    age: 23,
  },
  {
    firstname: "Alberto",
    lastname: "Paloschi",
    age: 31,
  },
  {
    firstname: "Elena",
    lastname: "Bianchi",
    age: 25,
  },
  {
    firstname: "Serena",
    lastname: "Neri",
    age: 29,
  },
];

//Stampare nome, cognome ed età di tutti gli studenti, nell'array.

console.log("Ecco gli oggetti dell'array: ");

for (el of students) {
  console.log(el);
  for (key in el) {
    console.log(el[key]);
  }
}

//Prompt per inserire un nuovo studente

var yourName = prompt("Qual è il tuo nome?");
var yourSurname = prompt("Qual è il tuo cognome?");
var yourAge = prompt("Quanti anni hai?");

students.push({
  firstname: yourName,
  lastname: yourSurname,
  age: yourAge,
});

console.log("Lista aggiornata: ");

for (el of students) {
  console.log(el);
  for (key in el) {
    console.log(el[key]);
  }
}
