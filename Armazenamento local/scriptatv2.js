var user = ''
var vit = 0

if(localStorage.getItem('nome')){
    user = localStorage.getItem('nome')
    vit = parseInt(localStorage.getItem('visitas')) + 1
    localStorage.setItem('visitas', vit)
    msgcont = `Você já visitou esta página ${vit} vezes. <br>
                Ela já está em seus favoritos?`
}else{
    user = window.prompt('Qual é o seu nome?')
    localStorage.setItem('nome', user)
    localStorage.setItem('visitas', '1')
    msgcont = `Esta é sua primeira visita a esta página. Espero que goste.`
}

document.getElementById('sdcuser').innerHTML = `Olá, ${user}.`
document.getElementById('nvisitas').innerHTML = msgcont



function esquecer(){
    localStorage.clear()
    window.location.reload()
}
function recarregar(){
    window.location.reload()
}