let i = 1
let lista  = document.getElementById('lbox')

function imprimir(i){
    if (i<=0) {i=1}
    if (i==1) {
        unid.innerHTML = i + ' unidade'
    }else{
        unid.innerHTML = i + ' unidades'
    }
    lista.innerHTML =  'Ovo = ' + ((57 * i)/57).toFixed(2) + 'unid<br>'
    lista.innerHTML += 'Azeite = ' + (27 * i).toFixed(2) + 'g<br>'
    lista.innerHTML += 'Fermento pão = ' + (10 * i).toFixed(2) + 'g<br>'
    lista.innerHTML += 'Sal = ' + (9 * i).toFixed(2) + 'g<br>'
    lista.innerHTML += 'Farinha de Trigo Integral = ' + (286 * i).toFixed(2) + 'g<br>'
    lista.innerHTML += 'Aveia = ' + (27 * i).toFixed(2) + 'g<br>'   
    lista.innerHTML += 'Farinha de Trigo = ' + (70 * i).toFixed(2) + 'g<br>'
    lista.innerHTML += 'Açucar = ' + (25 * i).toFixed(2) + 'g<br>'
    lista.innerHTML += 'Água = ' + (285 * i).toFixed(2) + 'g<br>'  
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