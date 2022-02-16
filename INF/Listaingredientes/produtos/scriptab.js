let i = 1
let lista  = document.getElementById('lbox')

function imprimir(i){
    if (i<=0) {i=1}
    if (i==1) {
        unid.innerHTML = i + ' unidade'
    }else{
        unid.innerHTML = i + ' unidades'
    }
    lista.innerHTML =  'Ovo = ' + ((14.8 * i)/57).toFixed(2) + 'unid<br>'
    lista.innerHTML += 'Margarina = ' + (11 * i).toFixed(2) + 'g<br>'
    lista.innerHTML += 'Farinha de Trigo = ' + (30 * i).toFixed(2) + 'g<br>'
    lista.innerHTML += 'Oleo = ' + (5 * i).toFixed(2) + 'g<br>'
    lista.innerHTML += 'Creme de leite = ' + (10 * i).toFixed(2) + 'g<br>'
    lista.innerHTML += 'Queijo parmessão = ' + (0.2 * i).toFixed(2) + 'g<br>'
    lista.innerHTML += 'Leite = ' + (20 * i).toFixed(2) + 'g<br>'
    lista.innerHTML += 'Femento bolo = ' + (0.7 * i).toFixed(2) + 'g<br>'
    lista.innerHTML += 'Sal = ' + (0.3 * i).toFixed(2) + 'g<br>'
    lista.innerHTML += 'Noz moscada = ' + (0.04 * i).toFixed(2) + 'g<br>'
    lista.innerHTML += 'Ricota = ' + (18 * i).toFixed(2) + 'g<br>'
    lista.innerHTML += 'Alho poró = ' + ((7 * i)*1.33).toFixed(2) + 'g<br>'
    lista.innerHTML += 'Bacon = ' + ((7 * i)*1.33).toFixed(2) + 'g'   
}
function calcular(){
    i = Number(document.getElementById('qtd').value);
    imprimir(i)
}
function menos(){
    i--
    imprimir(i)
}
function mais(){
    i++
    imprimir(i)
}