<script>
        /* --- CONTROLES DE ACESSIBILIDADE --- */
        let escalaAtual = 100;

        function ajustarTamanhoFonte(quantidade) {
            escalaAtual += quantidade;
            if (escalaAtual < 80) escalaAtual = 80;
            if (escalaAtual > 180) escalaAtual = 180;
            document.documentElement.style.setProperty('--escala-fonte', escalaAtual + '%');
        }

        function alternarContraste() {
            const corpoPagina = document.body;
            corpoPagina.classList.toggle('alto-contraste');
            
            const botao = document.getElementById('alternador-contraste');
            if (corpoPagina.classList.contains('alto-contraste')) {
                botao.textContent = "Cores Padrão ◑";
                botao.setAttribute('aria-label', 'Desativar modo de alto contraste');
            } else {
                botao.textContent = "Preto e Branco ◑";
                botao.setAttribute('aria-label', 'Ativar modo de alto contraste');
            }
        }

        /* --- RECURSO DE LEITURA EM VOZ ALTA --- */
        let lendoVoz = false;
        let sinteseVoz = window.speechSynthesis;
        let expressaoVoz = null;

        function alternarLeituraVoz() {
            const botao = document.getElementById('alternador-voz');

            if (!sinteseVoz) {
                botao.textContent = "Voz não suportada 🚫";
                botao.disabled = true;
                return;
            }

            if (lendoVoz) {
                sinteseVoz.cancel();
                lendoVoz = false;
                botao.textContent = "Ouvir Texto 🔊";
                botao.setAttribute('aria-label', 'Ativar leitura de texto em voz alta');
            } else {
                const textosParaLeitura = [];

                const tituloBanner = document.getElementById('titulo-banner')?.innerText || "";
                const descricaoBanner = document.querySelector('.banner-boas-vindas p')?.innerText || "";
                textosParaLeitura.push(tituloBanner, descricaoBanner);

                const tituloDicas = document.getElementById('titulo-dicas')?.innerText || "";
                textosParaLeitura.push(tituloDicas);
                const cartoesDica = document.querySelectorAll('.cartao-dica');
                cartoesDica.forEach(cartao => {
                    textosParaLeitura.push(cartao.innerText);
                });

                const tituloDireitos = document.getElementById('titulo-direitos')?.innerText || "";
                textosParaLeitura.push(tituloDireitos);
                const itensDireitos = document.querySelectorAll('.item-direito');
                itensDireitos.forEach(item => {
                    textosParaLeitura.push(item.innerText);
                });

                const tituloGolpe = document.getElementById('titulo-golpe')?.innerText || "";
                textosParaLeitura.push(tituloGolpe);
                const caixasAlerta = document.querySelectorAll('.caixa-alerta');
                caixasAlerta.forEach(caixa => {
                    textosParaLeitura.push(caixa.innerText);
                });

                const textoCompleto = textosParaLeitura.filter(texto => texto.trim() !== "").join(". ");

                if (textoCompleto) {
                    expressaoVoz = new SpeechSynthesisUtterance(textoCompleto);
                    expressaoVoz.lang = 'pt-BR';
                    
                    expressaoVoz.onend = function() {
                        lendoVoz = false;
                        botao.textContent = "Ouvir Texto 🔊";
                        botao.setAttribute('aria-label', 'Ativar leitura de texto em voz alta');
                    };

                    expressaoVoz.onerror = function() {
                        lendoVoz = false;
                        botao.textContent = "Ouvir Texto 🔊";
                    };

                    sinteseVoz.speak(expressaoVoz);
                    lendoVoz = true;
                    botao.textContent = "Parar Leitura ⏹️";
                    botao.setAttribute('aria-label', 'Parar leitura de texto em voz alta');
                }
            }
        }

        /* --- CONTROLE DO MODAL DE AJUDA --- */
        function abrirModalAjuda() {
            document.getElementById('modal-ajuda').style.display = 'flex';
            document.querySelector('.fechar-modal').focus();
        }

        function fecharModalAjuda() {
            if (lendoVoz && sinteseVoz) {
                sinteseVoz.cancel();
                lendoVoz = false;
                const botaoVoz = document.getElementById('alternador-voz');
                if (botaoVoz) {
                    botaoVoz.textContent = "Ouvir Texto 🔊";
                    botaoVoz.setAttribute('aria-label', 'Ativar leitura de texto em voz alta');
                }
            }
            document.getElementById('modal-ajuda').style.display = 'none';
        }

        window.onclick = function(evento) {
            const modal = document.getElementById('modal-ajuda');
            if (evento.target === modal) {
                fecharModalAjuda();
            }
        }
    </script>
</body>
</html>