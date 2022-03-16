// Generatore di “nomi cognomi” casuali: 
// il Grande Gatsby ha  una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.


let Nomi = ["Mario", "Giovanni", "Francesco", "Saverio", "Paolo", "Luca", "Alessandro"] 
let Cognomi = ["Rossi", "Verde", "Brambilla", "Esposito", "Franceschini", "Marini", "Paoli"]
let list;

function generator() {
 document.getElementById("name").innerHTML = Nomi[Math.floor(Math.random() * Nomi.length)] + " " + Cognomi[Math.floor(Math.random() * Cognomi.length)];
}
