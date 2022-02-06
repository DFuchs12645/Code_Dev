let i = 1
let lista  = document.getElementById('lbox')

function imprimir(i){
    if (i<=0) {i=1}
    if (i==1) {
        unid.innerHTML = i + ' unidade'
    }else{
        unid.innerHTML = i + ' unidades'
    }
    lista.innerHTML =  'Ovo = ' + ((189 * i)/57).toFixed(2) + 'unid<br>'
    lista.innerHTML += 'Laranja = ' + (458 * i).toFixed(2) + 'g<br>'
    lista.innerHTML += 'Farinha de Trigo = ' + (250 * i).toFixed(2) + 'g<br>'
    lista.innerHTML += 'Oleo = ' + (150 * i).toFixed(2) + 'g<br>'
    lista.innerHTML += 'Açucar = ' + (325 * i).toFixed(2) + 'g<br>'
    lista.innerHTML += 'Fermento bolo = ' + (15 * i).toFixed(2) + 'g<br>'   
}
        
function menos(){
    i--
    imprimir(i)
}
function mais(){
    i++
    imprimir(i)
}