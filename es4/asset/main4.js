

const array1 = [15, 20, 58];
const array2 = [17, 7];

let arrayMaggiore;
let arrayMinore;

if (array1.length == array2.length) {
   
    console.log("sono uguali");

} else if (array1.length > array2.length){
 
    arrayMaggiore = array1;
    arrayMinore = array2;

} else {
    
    arrayMinore = array1;
    arrayMaggiore = array2;
}

let differenzaLunghezza = arrayMaggiore.length - arrayMinore.length;

for (let i = 0; i < differenzaLunghezza; i++) {

    const numRandom = Math.floor(Math.random()*10);
    arrayMinore.push(numRandom);
}

console.log(arrayMaggiore);
console.log(arrayMinore)