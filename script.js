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
console.log(resultadoDaSoma);