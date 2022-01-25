function Carregar(){
var msg = document.getElementById('msg')
var foto = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
var segundos = data.getSeconds()

msg.innerHTML = `${hora}:${minutos}`

if (hora >= 6 && hora<12) {
    foto.src = 'img/manhã250.png'
    //e8d8c7
    document.body.style.background = '#e8d8c7'
} if (hora => 12 && hora <= 18) {
    foto.src = 'img/tarde250.png'
    //f69043
    document.body.style.background = '#f69043'
} else {
    foto.src = 'img/noite250.png'
    //012957
    document.body.style.background = '#012957'
}

}