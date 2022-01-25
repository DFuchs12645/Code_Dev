var ent = document.getElementById('ent')
ent.addEventListener('change', consumo)
var ref = document.getElementById('ref')
ref.addEventListener('change', consumo)
var sob = document.getElementById('sob')
sob.addEventListener('change', consumo)
var beb = document.getElementById('beb')
beb.addEventListener('change', consumo)

var tc = document.getElementById('tc')
var gj = document.getElementById('gj')
var ct = document.getElementById('ct')

function consumo(){
    entn = Number(ent.value)
    refn = Number(ref.value)
    sobn = Number(sob.value)
    bebn = Number(beb.value)

    let soma = entn + refn + sobn + bebn
    tc.innerHTML = `Total consumo: R$ ${soma.toFixed(2)}`

    let gorjeta = soma*0.1
    gj.innerHTML = `Gorjeto(10%): R$ ${gorjeta.toFixed(2)}`

    let total = soma + gorjeta
    ct.innerHTML = `Consumo total: R$ ${total.toFixed(2)}`
}