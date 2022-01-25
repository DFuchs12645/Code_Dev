var vet = []
function addnum(){
    let num = document.getElementsByName('Numeros')[0]
    let numn = Number(num.value)

    let numsel = document.getElementById('numsel')

    if (vet.indexOf(numn) == -1) {
        vet.push(numn)
        numsel.innerHTML += `${numn} `
    } else {
        window.alert('Escolha outro número.')
    }
}
function sortear(){
    let sortear = document.getElementById('sortear')
    let num = Number(sortear.value)

    let numsot = document.getElementById('numsot')

    if (num == 0) {
        window.alert('A quantidade de números sorteados não pode ser zero')
    }
    numsot.innerHTML= 'Números sorteado: '
    for (let i = 0; i < num; i++) {
        numsot.innerHTML += `[${vet[Math.floor(Math.random() * vet.length)]}] ` 
        
    }

}