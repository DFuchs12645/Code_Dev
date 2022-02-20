let i = 1
let lista  = document.getElementById('lbox')

function imprimir(i){
    if (i<=0) {i=1}
    if (i==1) {
        unid.innerHTML = i + ' unidade'
    }else{
        unid.innerHTML = i + ' unidades'
    }
    lista.innerHTML =  'Ovo = ' + ((144 * i)/57).toFixed(2) + 'unid<br>'
    lista.innerHTML += 'Manteiga = ' + (50 * i).toFixed(2) + 'g<br>'
    lista.innerHTML += 'Farinha de Trigo = ' + (600 * i).toFixed(2) + 'g<br>'
    lista.innerHTML += 'Leite = ' + (240 * i).toFixed(2) + 'g<br>'
    lista.innerHTML += 'Femento pão = ' + (10 * i).toFixed(2) + 'g<br>'
    lista.innerHTML += 'Açucar = ' + (60 * i).toFixed(2) + 'g<br>'
    lista.innerHTML += 'Gotas de chocolate = ' + (300 * i).toFixed(2) + 'g<br>'
    lista.innerHTML += 'Oleo = ' + (180 * i).toFixed(2) + 'g<br>' 
}
function calcular(){
    i = Number(document.getElementById('qtd').value);
    imprimir(i)
}
function menos(){
    i--
    if (i<=0) {i=1}
    imprimir(i)
}
function mais(){
    i++
    imprimir(i)
}