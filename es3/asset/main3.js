// Snack3
// Crea un array di numeri interi e 
// fai la somma di tutti gli elementi  che sono in posizione dispari


let n = [2 , 4 , 7 , 9 , 10 , 12 , 15];

let sum = 0;


for (let i = 1; i < n.length; i = i + 2 ) {
 
    sum += n[i];
    document.getElementById("stamp").innerHTML = `${sum}`
}

