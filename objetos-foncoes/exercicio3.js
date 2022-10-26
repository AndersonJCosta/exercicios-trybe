let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

/*
Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Use a sintaxe meuObjeto['chave'] = valor. Valor esperado no console:
*/

info['recorrente'] = 'Sim'


// console.log(info);

/*
Faça um for/in que mostre todas as chaves do objeto.
*/
/*
for (index in info){
    console.log(index);
}
*/
/*
Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console: 
*/
/*
for (index in info){
    console.log(info[index]);
}
*/
/* 
Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 
‘Tio Patinhas’,
‘Christmas on Bear Mountain,'Dell’s Four Color Comics #178’,
‘O último MacPatinhas’,
‘Sim’. 
    Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves. Valor esperado no console:
*/

let segundoObjeto = {
    personagem: 'Tio Patinhas',
    origem: ['Christmas on Bear Mountain','Dells Four Color Comics #178'],
    nota: 'O último MacPatinhas',
    corrente: 'Sim',
}

for (index in info,segundoObjeto){
console.log(info[index] + ' e ' + segundoObjeto[index] );
}