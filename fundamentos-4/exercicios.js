// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial

// let dezFatorial = 1;

// for (let index = 1; index <= 10; index += 1){
//     dezFatorial = dezFatorial * index;
// }

// console.log( dezFatorial );

// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

// let word = 'Anderson Jose Agostinho';
// let temp = [];
// for (let index = 0; index < word.length; index +=1){
//     temp.push(word [word.length-1-index]);
// }
// console.log(temp.join(''));
/*
let array = ['java', 'javascript', 'python', 'html', 'css'];

// Utilize a estrutura de repetição for para escrever dois algoritmos: um que retorne a maior palavra desse array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
let maior = array[0];
let menor = array[0];

for (let index = 0; index < array.length; index += 1 ){
    if (array[index].length>maior.length){
        maior = array[index]
    }
}

console.log("A maior palava é " + maior);

for (let index = 0; index < array.length; index += 1 ){
    if (array[index].length < menor.length){
        menor = array[index]
    }
}

console.log(menor);
*/
/*
Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.
*/

let biggestPrimeNumber = 0;

for (let currentNumber = 2; currentNumber <= 50; currentNumber += 1) {
  let isPrime = true;
  for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
    if (currentNumber % currentDivisor === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestPrimeNumber = currentNumber;
  }
}

console.log(biggestPrimeNumber);
