// Percorra o array imprimindo todos os valores nele contidos com a função console.log();

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let nomber of numbers){
//     console.log(nomber);
// }

// Some todos os valores contidos no array e imprima o resultado;

let resultadoDaSoma = 0

for (let index = 0 ; index < numbers.length ; index += 1){
    resultadoDaSoma =resultadoDaSoma + numbers[index]
}
// console.log(resultadoDaSoma);

// Calcule e imprima a média aritmética dos valores contidos no array;

let media = resultadoDaSoma/numbers.length;
console.log(media);


// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.