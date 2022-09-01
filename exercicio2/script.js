//const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
// item              1  2  3  4  5  6  7
//indice             0  1  2  3   4  5  6
const listaNumeros = [5,10,50,25,70,40,45];

const listaNomes = ["morango", "uva", "banana", "maça"];

const provaDeVida = ["Maria", 70, true];

// Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);
console.log(listaNumeros.length);
console.log(listaNomes.length);
console.log(provaDeVida.length);

//Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
console.log(listaNumeros[0]);
console.log(listaNomes[1]);
console.log(provaDeVida[2]);

//Imprima uma informação booleana verdadeira sobre a **inclusão** de um item do primeiro array, e uma informação booleana falsa sobre a **inclusão** de um item ao terceiro array. Isto é, um `includes()` verdadeiro, e outro falso.
console.log(listaNumeros.includes(50) === true);
console.log(provaDeVida.includes("Joao") === true);

