let i = 1
let lista  = document.getElementById('lbox')

function imprimir(i){
    if (i<=0) {i=1}
    if (i==1) {
        unid.innerHTML = i + ' unidade'
    }else{
        unid.innerHTML = i + ' unidades'
    }
    lista.innerHTML =  'Aveia = ' + (5.34 * i).toFixed(2) + 'g<br>'
    lista.innerHTML += 'Farinha de Trigo = ' + (10.591 * i).toFixed(2) + 'g<br>'
    lista.innerHTML += 'Farinha de Trigo Integral = ' + (10.591 * i).toFixed(2) + 'g<br>'
    lista.innerHTML += 'Oleo = ' + ((1.905 * i)+(0.392 * i)).toFixed(2) + 'g<br>'
    lista.innerHTML += 'Sal = ' + (0.169 * i).toFixed(2) + 'g<br>'
    lista.innerHTML += 'Agua = ' + (11.481 * i).toFixed(2) + 'g<br>'
    lista.innerHTML += 'Ricota = ' + (37.38 * i).toFixed(2) + 'g<br>'
    lista.innerHTML += 'Cebola = ' + (2.67 * i).toFixed(2) + 'g<br>'
    lista.innerHTML += 'Frango = ' + ((5.34 * i)*1.28).toFixed(2) + 'g<br>'
    lista.innerHTML += 'Salsa e Cebolinha = ' + (0.534 * i).toFixed(2) + 'g'
}

function menos(){
    i--
    imprimir(i)
}
function mais(){
    i++
    imprimir(i)
}
        


