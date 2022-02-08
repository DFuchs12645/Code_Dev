/*
criar vetor computador  okok
criar vetor jogador ok
colocar os valores dos 3 dados neles    ok 
soma-los    ok
colocar as imagens no html
definir o maior
apresentar o vencedor
*/

var dadosComp = [];
var dadosJog = [];

function sortear() {
    var totComp = 0; 
    var totJog = 0;

    for (var i=0; i < 3; i++) {
        // computador
        dadosComp[i] = Math.floor(Math.random() * 6) + 1;
        totComp += dadosComp[i];
        // Jogador
        dadosJog[i] = Math.floor(Math.random() * 6) + 1;
        totJog += dadosJog[i];
    }
    // colocar os dados sorteados na página
    document.getElementById("comp").innerHTML = 
        "<img src='dado"+ dadosComp[0] +".png'>"+
        "<img src='dado"+ dadosComp[1] +".png'>"+
        "<img src='dado"+ dadosComp[2] +".png'>";
    document.getElementById("jog").innerHTML = 
        "<img src='dado"+ dadosJog[0] +".png'>"+
        "<img src='dado"+ dadosJog[1] +".png'>"+
        "<img src='dado"+ dadosJog[2] +".png'>";
    // montando a mensagem do vencedor
    var mensagem = "";
    if (totComp > totJog) {
        mensagem = "Computador venceu o Jogador ("+totComp+" a "+totJog+")";
    } else {
        if (totComp < totJog) {
            mensagem = "Jogador venceu o Computador ("+totJog+" a "+totComp+")";
        } else {
            mensagem = "Jogador e Computador empataram ("+totJog+" a "+totComp+")";
        }
    }
    document.getElementById("msg").innerHTML = mensagem;
}