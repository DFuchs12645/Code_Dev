function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var ano_nasc = document.getElementById('ano_nasc')
    var msg = document.getElementById('msg')
    
    
    //Criando elemento dinamico
    var img = document.createElement('img')
    img.getAttribute('id', 'foto')

    //Filtro do botão radio
    var sex = document.getElementsByName('radsex')
    var genero = ''
    if (sex[0].checked) {
        genero = 'Masculino'
        if (idade >= 0 && idade <= 5) {
            img.setAttribute('src', 'img/garoto5anos250.jpg')
        }
        
    } 
    else {
        genero = 'Feminino'
        
    }

    if (ano_nasc.value.length == 0 || Number(ano_nasc.value) > ano) {
        window.alert('erro')
    }

    
    
        
    





window.alert('ok')  
}