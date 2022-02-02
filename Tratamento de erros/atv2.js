
function validateForm(){
try {
    let loja = document.getElementById('nomeloja').value
    let cidade = document.getElementById('cidade').value
    let valor = Number(document.getElementById('valor').value)

    if(loja == '') throw 'blank'
    if(cidade == '') throw 'blank'
    if(valor == '') throw 'blank'
    
    let lojas = {
        Loja: loja,
        Cidade: cidade,
        ValorVendas: valor
    }
    console.log(lojas.Loja)
    let vet = []
    vet.push(lojas)

    
    console.log(vet)
    
} catch (error) {
    if (error == 'blank'){
        console.log('espaço em branco')
    }
}
finally{

}
}
function recarregar(){
    window.location.reload()
}