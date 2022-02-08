var vet = []
function adicionar(){
    let num = document.getElementById('num')
    num = Number(num.value)

    let vetor = document.getElementById('vetor')
    
    if (num < 1 || num > 100) {
        window.alert(`O número ${num} não pode ser adicionado, escolha um numero de 1 a 100`)
    }else{
        vet.push(num)
        vetor.innerHTML += `Valor adicionado <strong>${num}
        </strong> <br>`
    }
    console.log(vet)
    
}
function finalizar(){
    
    let msg = document.getElementById('msg')
/*
soma
media
*/
   
    msg.innerHTML = `Ao todo foram cadastrados 
    <strong>${vet.length}</strong> números. <br>`
    vet.sort()
    msg.innerHTML += `O maior número cadastrado foi 
    <strong>${vet[vet.length - 1]}</strong>. <br>`
    msg.innerHTML += `O menor número cadastrado foi 
    <strong>${vet[0]}</strong>. <br>`

    let soma = 0
    for (let i = 0; i < vet.length; i++) {
        soma = soma + vet[i]
    }
    let media = soma / vet.length    

    msg.innerHTML += `A soma dos números cadastrados foi 
    <strong>${soma}</strong>. <br>`
    msg.innerHTML += `A média dos números cadastrados foi 
    <strong>${media}</strong>. <br>`
}
