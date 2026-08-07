let tamanhoFonte = 100;

// Botões
const botaoAumentarFonte = document.getElementById("botao-aumentar-fonte");
const botaoDiminuirFonte = document.getElementById("botao-diminuir-fonte");
const botaoLeituraVoz = document.getElementById("botao-leitura-voz");
const botaoAltoContraste = document.getElementById("botao-alto-contraste");
const botaoRestaurar = document.getElementById("botao-restaurar");
const botaoAjuda = document.querySelector(".botao-ajuda");

// Aumentar fonte
botaoAumentarFonte.addEventListener("click", () => {
    if (tamanhoFonte < 200) {
        tamanhoFonte += 10;
        document.body.style.fontSize = tamanhoFonte + "%";
    }
});

// Diminuir fonte
botaoDiminuirFonte.addEventListener("click", () => {
    if (tamanhoFonte > 70) {
        tamanhoFonte -= 10;
        document.body.style.fontSize = tamanhoFonte + "%";
    }
});

// Alto contraste
botaoAltoContraste.addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
});

// Leitura em voz alta
botaoLeituraVoz.addEventListener("click", () => {

    if ("speechSynthesis" in window) {

        speechSynthesis.cancel();

        const texto = document.body.innerText;

        const fala = new SpeechSynthesisUtterance(texto);

        fala.lang = "pt-BR";
        fala.rate = 1;
        fala.pitch = 1;

        speechSynthesis.speak(fala);

    } else {
        alert("Seu navegador não suporta leitura em voz alta.");
    }

});

// Restaurar configurações
botaoRestaurar.addEventListener("click", () => {

    tamanhoFonte = 100;
    document.body.style.fontSize = "100%";
    document.body.classList.remove("alto-contraste");
    speechSynthesis.cancel();

});

// Botão de ajuda
botaoAjuda.addEventListener("click", () => {

    alert(
`Dicas rápidas:

• Não compartilhe senhas.
• Verifique links antes de clicar.
• Use senhas fortes.
• Ative a autenticação em dois fatores.
• Em caso de golpe, procure ajuda imediatamente.`
    );

});