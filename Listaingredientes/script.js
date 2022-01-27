function caling(){
    var lista = document.getElementById('lista')

    var pf = Number(document.getElementById('pf').value)
    var pe = Number(document.getElementById('pe').value)
    var qpq = Number(document.getElementById('qpq').value)
    var qab = Number(document.getElementById('qab').value)

    /* pastel
    Massa 120
    Aveia = 640g
    Farinha de trigo = 1270,92g
    Farinha de trigo integral = 1270,92g
    oleo = 228,55g
    sal = 20,29g
    agua = 1377,72g

    Recheio Espinafre 60
    Ricota = 2242,80g
    Cebola = 160,20g
    oleo = 23,50g
    *espinafre = 347,10g                    1393g>cozimento>1017g

    Recheio Frango 60
    Ricota = 2242,80g
    Cebola = 160,20g
    oleo = 23,50g
    frango = 320,40g                        Perda de 28%
    salsa e cebolinha = 32,04g
    */
    /*Quiche
    Massa 1unid
    *Gema de ovo = 4g
    Margarina = 11g
    oleo = 5g
    Farinha de trigo = 30g

    Molho 10unid
    ovo = 108g                              unid=57g
    creme de leite = 100g
    queijo parmesão = 20g
    leite = 200g
    fermento bolo = 7g
    Sal = 3g
    Noz moscada = 0.4g

    Recheio Presunto e queijo 1unid
    presunto = 13g
    mussarela = 12g
    ricota = 18g

    Recheio alho poró e bacon 1unid
    *alho poró = 7g                             ap=180g
    *bacon = 7g                                 b=180g
    ricota = 18g                                246g apos cozimento fazem 18unid
    */
    /*
    bolo laranja
    laranja = 229+229g
    ovo = 189g
    oleo = 150g
    açucar = 244+81g
    ft = 250g
    fermento = 15g

    Rosca de chocolate
    ft = 600g
    ovo = 114
    leite = 240g
    fermento = 10g
    açucar = 60g 
    gotas de chocolate = 300g
    manteiga = 50g
    oleo = 108g

    Pão integral
    ovo = 57g
    azeite = 27g
    fermento = 10g
    sal = 9g
    fti = 286g
    aveia = 27g
    ft = 70
    açucar 25
    agua 285


    */
        // Aveia 0,FT 1,FTI 2,oleo 3,sal 4,agua 5
    var massapastel = [5.34, 10.591, 10.591, 1.905, 0.169, 11.481]
        // Ricota 0, Cebola 1, Oleo 2, Espinafre 3 
    var recheioespinafre = [37.38, 2.67, 0.392, 5.785]
        // Ricota 0, Cebola 1, Oleo 2, frango 3, salsa e cebolinha 4
    var recheiofrango = [37.38, 2.67, 0.392, 5.34, 0.534]

    var ingredietes = {
        //ingrdiente: (onde usa)*(qtd)
        Aveia: ((massapastel[0])*(pf+pe)).toFixed(2),
        Farinha_de_Trigo: ((massapastel[1])*(pf+pe)).toFixed(2),
        Farinha_de_Trigo_Integral: ((massapastel[2])*(pf+pe)).toFixed(2),
        Oleo: ((massapastel[3]+recheioespinafre[2]+recheiofrango[2])*(pf+pe)).toFixed(2),
        Sal: ((massapastel[4])*(pf+pe)).toFixed(2),
        Agua: ((massapastel[5])*(pf+pe)).toFixed(2),
        Ricota: ((recheiofrango[0]+recheioespinafre[0])*(pf+pe)).toFixed(2),
        Cebola: ((recheioespinafre[1]+recheiofrango[1])*(pf+pe)).toFixed(2),
        Espinafre: ((recheioespinafre[3])*(pe)).toFixed(2),
        Frango: ((recheiofrango[3])*(pf)).toFixed(2),
        Salsa_e_Cebolinha: ((recheiofrango[4])*(pf)).toFixed(2),

    }
    lista.innerHTML = 
    `
    Aveia &rarr;${JSON.stringify(ingredietes.Aveia)}g<br>
    Farinha de Trigo &rarr;${JSON.stringify(ingredietes.Farinha_de_Trigo)}g<br>
    Farinha de Trigo Integral &rarr;${JSON.stringify(ingredietes.Farinha_de_Trigo_Integral)}g<br>
    Óleo &rarr;${JSON.stringify(ingredietes.Oleo)}g<br>
    Sal &rarr;${JSON.stringify(ingredietes.Sal)}g<br>
    Agua &rarr;${JSON.stringify(ingredietes.Agua)}g<br>
    Ricota &rarr;${JSON.stringify(ingredietes.Ricota)}g<br>
    Cebola &rarr;${JSON.stringify(ingredietes.Cebola)}g<br>
    Espinafre &rarr;${JSON.stringify(ingredietes.Espinafre)}g<br>
    Frango &rarr;${JSON.stringify(ingredietes.Frango)}g<br>
    Salsa_e_Cebolinha &rarr;${JSON.stringify(ingredietes.Salsa_e_Cebolinha)}g
    `    
    





}