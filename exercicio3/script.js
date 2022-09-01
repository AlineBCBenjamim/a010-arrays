// Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

// item              1  2  3  4  5  6  7
//indice             0  1  2  3   4  5  6

const listaNumeros = [5,10,50,25,70,40,45];

const listaNomes = ["morango", "uva", "banana", "maça"];

// item                 1     2    3  
//indice                0     1    2  

const provaDeVida = ["Maria", 70, true];

const listaNumerosCopia = listaNumeros.slice();

const listaNomesCopia = listaNomes.slice();

const provaDeVidaCopia = provaDeVida.slice();

// Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;

listaNumerosCopia.push(3);
console.log(listaNumeros, listaNumerosCopia);

//Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;

listaNomesCopia.pop();
console.log(listaNomes, listaNomesCopia);

// Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;

listaNumerosCopia.splice(1,1); // (indice e quantidade que quero retirar)
console.log(listaNumeros, listaNumerosCopia);
