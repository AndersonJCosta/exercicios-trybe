# exercicios-trybe
parentNode: retorna o nó pai.
parentElement: retorna o elemento pai.
childNodes: retorna um NodeList com todos os nós filhos.
children: retorna um HTMLCollection com todos os elementos filhos.
firstChild: retorna o primeiro nó filho.
firstElementChild: retorna o primeiro elemento filho.
lastChild: retorna o último nó filho.
lastElementChild: retorna o último elemento filho.
nextSibling: retorna o próximo nó.
nextElementSibling: retorna o próximo elemento.
previousSibling: retorna o nó anterior.
previousElementSibling: retorna o elemento anterior.
createElement: criar um elemento HTML
.appendChild: adicionar um elemento como filho de outro

rascunho do video de 5.2 criando Elementos:

let ingredientList = docuent.querySelector('.ingredients-list');

for (let index = 0; index < ingredientItems.length; index +=1){
let ingredient = ingredientItems[index];

let ingredientListItem = createElement('li');
ingredientListItem.innerText = ingredient;

ingredientList.appendChild(ingredentListItem)
}