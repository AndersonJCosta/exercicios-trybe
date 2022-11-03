const body = document.body;
const doc = document;

function criandoH1() {
    
    const addH1 = document.createElement ('h1');
    addH1.innerText = 'Exercício - JavaScript DOM';
    body.appendChild (addH1);
}
criandoH1();

function createMain() {
    const addMain = document.createElement ('main');
    addMain.className = 'center-content';
    body.appendChild (addMain)
}
createMain();

function createSection() {
    const addSection = document.createElement('section');
    addSection.className = 'center-content';
    document.querySelector("main").appendChild(addSection);
}
createSection();

function createP() {
    doc.querySelector ("section").appendChild (doc.createElement ("p") );
}
createP();

function createSections (name){
    const section = doc.createElement ("section");
    section.className = name
    doc.querySelector ("main").appendChild (section);
}
createSections('left-content');
createSections('right-content');

function imagem() {
    const tag = doc.createElement('img');
    tag.src = 'https://picsum.photos/200';
    tag.className = 'small-image';
    doc.querySelector(".left-content").appendChild(tag);
}
imagem();