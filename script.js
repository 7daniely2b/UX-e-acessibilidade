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

let btnAumentaFonte = document.getElementById("btnAumentaTexto");
let btnDiminuiFonte = document.getElementById("btnAumentaTexto");

btnAjuda.addEventlistener("click", btnAumentaFonte);
btnFechar.addEventlistener("click", diminuiFonte);

function aumentaFonte()  {
     tamanhoFontAtual = tamanhoFontAtual + valorAdicionado;
    document.documentElement.style.fontSize = `${tamanhoFontAtual}px`;
}

function diminuiFonte() {
    tamanhoFontAtual = tamanhoFontAtual + valorSubtraido;
    document.documentElement.style.fontSize = `${tamanhoFonteAtual}px`;
}