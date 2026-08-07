let tamanhoFonte = 100;

const botaoAumentarFonte = document.getElementById("botao-aumentar-fonte");
const botaoDiminuirFonte = document.getElementById("botao-diminuir-fonte");
const botaoLeituraVoz = document.getElementById("botao-leitura-voz");

botaoAumentarFonte.addEventListener("click", () => {
    if (tamanhoFonte < 200) {
        tamanhoFonte += 10;
        document.body.style.fontSize = tamanhoFonte + "%";
    }
});

botaoDiminuirFonte.addEventListener("click", () => {
    if (tamanhoFonte > 70) {
        tamanhoFonte -= 10;
        document.body.style.fontSize = tamanhoFonte + "%";
    }
});

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
const botaoAltoContraste = document.getElementById("botao-alto-contraste");

botaoAltoContraste.addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
});
const botaoRedefinir = document.getElementById("botao-redefinir");

botaoRedefinir.addEventListener("click", () => {

    tamanhoFonte = 100;
    document.body.style.fontSize = "100%";

    document.body.classList.remove("alto-contraste");

    speechSynthesis.cancel();

});