const body = document.body;
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