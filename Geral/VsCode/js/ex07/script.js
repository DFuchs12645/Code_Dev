function contar() {
    var inicio  =    document.getElementById('inicio')
    var passo   =    document.getElementById('passo')
    var fim     =    document.getElementById('fim')
    var msg     =    document.getElementById('msg')
    
    Ninicio  = Number(inicio.value)
    Npasso   = Number(passo.value)
    Nfim     = Number(fim.value)
      
    if (inicio.value.length == 0 || passo.value.length == 0 || fim.value.length == 0) {
        window.alert('Está faltando dados.')
    }
    
    if (Npasso <= 0) {
        window.alert(`O valor do passo não pode ser igual a ${Npasso}, será considerado o valor do passo igual a 1.`)
        Npasso = 1
    }
    
    if (Ninicio < Nfim) {
        for (let i = Ninicio; i <= Nfim; i = i + Npasso) {
            msg.innerHTML += `${i} `
        }  
    }
    if (Ninicio > Nfim){
        for (let i = Ninicio; i >= Nfim; i = i - Npasso) {
            msg.innerHTML += `${i} `
        }
    }
    window.alert('Contando ...')
}