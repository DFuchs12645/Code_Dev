var lista = document.getElementById('lista')
var listaitens = []


function add(){
    let item = {
        nome:"",
        quantidade:0
    }
    
    item.nome = window.prompt('Digite o item para adicionar a lista')
    item.quantidade = window.prompt('Digite a quantidade do item para adicionar na lista')
    listaitens.push(item)
    document.cookie = JSON.stringify(listaitens)
    
    console.log(listaitens)
    console.log(document.cookie)
}

function edt(){

}   
function exc(){
    lista.innerHTML = ''
    
    // recuperando todos os cookies em uma variável (string)
    var biscoitos = document.cookie;
    // exibindo a string inteira dos cookies na página antes de apagar
    
    // alterando o cookie cuja chave é "cidade"
    document.cookie = "; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    // recuperando todos os cookies em uma variável (string)
    biscoitos = document.cookie;
    // exibindo a string inteira dos cookies na página depois de apagar
    
    
    
}
function pesquisar(){
    let filtro = document.getElementById('search').value

    if (filtro) {
        
    }
}  
 
var listaitens = JSON.parse(document.cookie.split(','))
console.log(listaitens.lenght)

for (let item of listaitens) {
    lista.innerHTML += `<input type="checkbox" name="" id="">${item.nome} &rarr; ${item.quantidade}<br>` 
}


