// Com base nessas informações, crie um algoritmo que imprima na tela o fatorial

// let dezFatorial = 1;

// for (let index = 1; index <= 10; index += 1){
//     dezFatorial = dezFatorial * index;
// }

// console.log( dezFatorial );

// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'Anderson Jose Agostinho';
let temp = [];
for (let index = 0; index < word.length; index +=1){
    temp.push(word [word.length-1-index]);
}
console.log(temp.join(''));