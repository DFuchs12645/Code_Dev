// --- inicialização das variáveis do jogo ---
var jog = "x";     // identificação do jogador  
var tab = [8];     // criação do array de tabuleiro (vazio)
// primeiro aviso de quem é a vez de jogar
document.getElementById('mensagem').innerHTML = 
        "É a vez do jogador <img src='"+ jog +".png'>";

// --- funcão que processa uma jogada ---
// --- (executada quando se aperta um botão)
function jogada(bt){
    // testa se a casa está ocupada (se o botão já havia sido escolhido antes)
    if ((tab[bt] == 'x') || (tab[bt] == 'o')) {
        alert ('Lamento, mas essa casa já foi ocupada.');
    } else {
        // ocupa a casa no array e desenha símbolo do jogador no botão
        document.getElementById(bt).innerHTML = "<img src='"+ jog +".png'>";
        tab[bt] = jog;
        
        // testa se o jogo acabou
        if (vencedor(jog)) {
            document.getElementById('mensagem').innerHTML = 
                "O jogador <img src='"+ jog +".png'> venceu!!!";
        } else { 
            // testa se foi empate (não há mais casas disponíveis)
            if (ocupadas() == 9) {   // não há mais jogadas disponíveis
                document.getElementById('mensagem').innerHTML = 
                    "O jogo empatou!!!";
            } else {          // o jogo continua
                // muda o jogador
                if (jog == "x") { 
                    jog = "o"; 
                } else { 
                    jog = "x"; 
                }
                // muda jogador no aviso
                document.getElementById('mensagem').innerHTML = 
                    "É a vez do jogador <img src='"+ jog +".png'>";
            }
        }               
    }
}

// --- funcão que testa se o jogador venceu ---
function vencedor(j) {
    var result = false;

    // testa se alguma linha é toda igual ao jogador
    for (var i = 0; i < 7; i+=3) {
        if ((tab[i] == tab[i+1]) && (tab[i] == tab[i+2]) && (tab[i] == j)) {
            result = true;
            break;
        }
    }
    // testa se alguma coluna é toda igual ao jogador
    for (i = 0; i < 3; i++) {
        if ((tab[i] == tab[i+3]) && (tab[i] == tab[i+6]) && (tab[i] == j)) {
            result = true;
            break;
        }
    }
    // testa se alguma diagonal é toda igual ao jogador
    if ((tab[0] == tab[4]) && (tab[4] == tab[8]) && (tab[8] == j)) {
        result = true;
    }
    if ((tab[2] == tab[4]) && (tab[4] == tab[6]) && (tab[6] == j)) {
        result = true;
    } 
    // restorna se jogador venceu (true) ou não (false)
    return result;
}

// --- funcão que testa se o jogador venceu ---
function ocupadas() {
    var qtd = 0;
        for (var e = 0; e < 9; e++) {
            if ((tab[e] == "x") || (tab[e] == "o")) {
                qtd ++;
            }
        }
    return qtd;
}

// --- funcão que recarrega a página (reinicia o jogo) ---
function reinicia() {
    window.location.reload();
}