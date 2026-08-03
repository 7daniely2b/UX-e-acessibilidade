// CODIGO DO MODAL
let btnAjuda = document.querySelector(".botao-ajuda");
let btnFechar = document.querySelector(".botao-fechar");
let modal = document.querySelector(".modal-fundo");

btnAjuda.addEventlistener("click", abreModal);
btnFechar.addEventlistener("click", fechaModal);

function abreModal() {
    modal.style.display = "block";
}

function fechaModal() {
    modal.style.display = "none";
}


// TAMANHO DE FONTES
let tamanhoFontAtual = 16;
const valorAdicionado = 2;
const valorSubtraido = 2;

let btnAumentaFonte = document.