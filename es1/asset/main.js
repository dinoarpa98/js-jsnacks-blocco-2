 let numero;
 numero = parseInt(prompt('Inserisci un numero'));


 if (numero % 2 == 0) {
     document.getElementById("stamp").innerHTML = `${numero} pari`;
 } else
 {
     let add = numero + 1;
     document.getElementById("stamp").innerHTML = `${add}`;
 }
