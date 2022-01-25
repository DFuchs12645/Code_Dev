var Somavalor = parseInt(localStorage.getItem('numero'))
document.getElementById('totac').innerHTML = 'Total acumulado: '+ Somavalor

function aceitar(){
    Somavalor = parseInt(localStorage.getItem('numero'))
    var num = parseInt(document.getElementById('num').value)
    Somavalor += num
    localStorage.setItem('numero',Somavalor)

    window.location.reload()   
}
function zerar(){
    localStorage.setItem('numero','0')
    window.location.reload()    
}