const display = document.querySelector('.zero');

function teclas(valor) {
    display.innerHTML += valor;
};

function operadores(valor) {
    display.innerHTML += valor;
};

function excluir() {
    display.innerHTML = '';
};

function apagar() {
    display.innerHTML = display.innerHTML.slice(0, -1);
};

function calculo() {
    const resultado = document.querySelector('.zero').innerHTML;
    document.querySelector('.zero').innerHTML = eval(resultado);
};












