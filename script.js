let tamanhoFonte = 100;

document.getElementById("botao-aumentar-fonte")
.addEventListener("click", () => {
    tamanhoFonte += 10;
    document.body.style.fontSize = tamanhoFonte + "%";
});

document.getElementById("botao-diminuir-fonte")
.addEventListener("click", () => {
    tamanhoFonte -= 10;
    document.body.style.fontSize = tamanhoFonte + "%";
});

document.getElementById("botao-alto-contraste")
.addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
});

document.getElementById("botao-restaurar")
.addEventListener("click", () => {
    tamanhoFonte = 100;
    document.body.style.fontSize = "100%";
    document.body.classList.remove("alto-contraste");
    speechSynthesis.cancel();
});

document.getElementById("botao-leitura-voz")
.addEventListener("click", () => {

    speechSynthesis.cancel();

    const texto = document.body.innerText;

    const fala = new SpeechSynthesisUtterance(texto);

    fala.lang = "pt-BR";

    speechSynthesis.speak(fala);
});