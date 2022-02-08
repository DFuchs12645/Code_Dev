var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
var diaSem = data.getDay()


    if (hora <= 12) {
        console.log(`Bom dia, são ${hora}:${minutos}.`)
    }else if (hora <= 17) {
        console.log(`Boa tarde, são ${hora}:${minutos}.`)
    } else {
        console.log(`Boa noite, são ${hora}:${minutos}.`)
    }


switch (diaSem) {

    case 0:
        console.log('Domingo')
        break;
    case 1:
            console.log('Segunda-feira')
        break;
    case 2:
            console.log('Terça-feira')
         break;
    case 3:
            console.log('Quarta-feira')
        break;
    case 4:
            console.log('Quinta-feira')
        break;
    case 3:
            console.log('Sexta-feira')
        break;
    case 4:
            console.log('Sabado')
        break;
    default:
        break;
}