function caling(){
    var lista = document.getElementById('lista')

    var pf = Number(document.getElementById('pf').value)
    var pe = Number(document.getElementById('pe').value)
    var pq = Number(document.getElementById('qpq').value)
    var ab = Number(document.getElementById('qab').value)
    var bl = Number(document.getElementById('bl').value)
    var rc = Number(document.getElementById('rc').value)
    var pi = Number(document.getElementById('pi').value)

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
    *espinafre = 347,10g                    1393g>cozimento>1017g   26% de perda

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
    ovo = 108g--10,8g                            unid=57g
    creme de leite = 100g--10g
    queijo parmesão = 20g--0,2g
    leite = 200g--20g
    fermento bolo = 7g--0,7g
    Sal = 3g--0,3g
    Noz moscada = 0.4g--0,04g

    Recheio Presunto e queijo 1unid
    presunto = 13g
    mussarela = 12g
    ricota = 18g

    Recheio alho poró e bacon 1unid
    *alho poró = 7g                             ap=180g     33% de perda
    *bacon = 7g                                 b=180g      33% de perda
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
    
    var mpastel={
        Aveia:5.34,
        Farinha_de_Trigo:10.591,
        Farinha_de_Trigo_Integral:10.591,
        Oleo:1.905,
        Sal:0.169,
        Agua:11.481
    }
    var respinafre = {
        Ricota: 37.38,
        Cebola: 2.67,
        Oleo: 0.392,
        Espinafre: 5.785
    }
    var rfrango = {
        Ricota: 37.38,
        Cebola: 2.67,
        Oleo: 0.392,
        Frango:5.34,
        Cheiro_verde:0.534
    }
    var quiche = {
        Ovo: 14.8,
        Margarina: 11,
        Oleo: 5,
        Farinha_de_Trigo: 30,
        Creme_de_leite: 10,
        Queijo_parmessao: 0.2,
        Leite: 20,
        Fermento_bolo: 0.7,
        Sal: 0.3,
        Noz_moscada: 0.04
    }
    var presunto = {
        Presunto: 13,
        Mussarela: 12,
        Ricota: 18
    }
    var alhobacon = {
        Alho_poro: 7,
        Bacon: 7,
        Ricota: 18
    }
    var roscachocolate = {
        Farinha_de_Trigo: 600,
        Ovo: 114,
        Leite: 240,
        Fermento_pao: 10,
        Acucar: 60,
        Gotas_de_chocolate: 300,
        Manteiga: 50,
        Oleo: 108
    }
    var bololaranja = {
        Laranja: 458,
        Ovo: 189,
        Oleo: 150,
        Acucar: 325,
        Farinha_de_Trigo: 250,
        Fermento_bolo: 15  
    }
    var paointegral = {
    Ovo: 57,
    Azeite: 27,
    Fermento_pao: 10,
    Sal: 9,
    Farinha_de_Trigo_Integral: 286,
    Aveia: 27,
    Farinha_de_Trigo: 70,
    Acucar: 25,
    Agua: 285
    }
    
    var ingredietes = {
        Acucar:(bololaranja.Acucar*bl+paointegral.Acucar*pi+roscachocolate.Acucar*rc).toFixed(2),
        Agua: (mpastel.Agua*pf+mpastel.Agua*pe+paointegral.Agua*pi).toFixed(2),
        Alho_poro:(alhobacon.Alho_poro*ab).toFixed(2),
        Aveia: (mpastel.Aveia*pe+mpastel.Aveia*pf+paointegral.Aveia*pi).toFixed(2),
        Azeite:(paointegral.Azeite*pi).toFixed(2),
        Bacon:(alhobacon.Bacon*ab).toFixed(2),
        Cebola:(rfrango.Cebola*pf+respinafre.Cebola*pe).toFixed(2),
        Creme_de_leite:(quiche.Creme_de_leite*ab+quiche.Creme_de_leite*pq).toFixed(2),
        Espinafre:(respinafre.Espinafre*pe).toFixed(2),
        Farinha_de_Trigo:(mpastel.Farinha_de_Trigo*pe+mpastel.Farinha_de_Trigo*pf+quiche.Farinha_de_Trigo*ab+quiche.Farinha_de_Trigo*pq+bololaranja.Farinha_de_Trigo*bl+paointegral.Farinha_de_Trigo*pi+roscachocolate.Farinha_de_Trigo*rc).toFixed(2),
        Farinha_de_Trigo_Integral: (mpastel.Farinha_de_Trigo_Integral*pe+mpastel.Farinha_de_Trigo_Integral*pf+paointegral.Farinha_de_Trigo_Integral*pi).toFixed(2),
        Fermento_bolo:(quiche.Fermento_bolo*pq+quiche.Fermento_bolo*ab+bololaranja.Fermento_bolo*bl).toFixed(2),
        Fermento_pao:(roscachocolate.Fermento_pao*rc+paointegral.Fermento_pao*pi).toFixed(2),
        Frango: (rfrango.Frango*pf).toFixed(2),
        Gotas_de_chocolate:(roscachocolate.Gotas_de_chocolate*rc).toFixed(2),
        Laranja:(bololaranja.Laranja*bl).toFixed(2),
        Leite:(quiche.Leite*pq+quiche.Leite*ab+roscachocolate.Leite*rc).toFixed(2),
        Manteiga:(roscachocolate.Manteiga*rc),
        Margarina:(quiche.Margarina*pq+quiche.Margarina*ab).toFixed(2),
        Mussarela:(presunto.Mussarela*pq).toFixed(2),
        Noz_moscada:(quiche.Noz_moscada*pq+quiche.Noz_moscada*ab).toFixed(2),
        Oleo: (mpastel.Oleo*pe+respinafre.Oleo*pe+mpastel.Oleo*pf+rfrango.Oleo*pf+quiche.Oleo*pq+quiche.Oleo*ab+bololaranja.Oleo*bl+roscachocolate.Oleo*rc).toFixed(2),
        Ovo:(quiche.Ovo*pq+quiche.Ovo*ab+bololaranja.Ovo*bl+roscachocolate.Ovo*rc+paointegral.Ovo*pi).toFixed(2),
        Presunto:(presunto.Presunto*pq).toFixed(2),
        Queijo_parmessao:(quiche.Queijo_parmessao*pq+quiche.Queijo_parmessao*ab).toFixed(2),
        Ricota: (rfrango.Ricota*pf+respinafre.Ricota*pe+presunto.Ricota*pq+alhobacon.Ricota*ab).toFixed(2),
        Sal: (mpastel.Sal*pe+mpastel.Sal*pf+quiche.Sal*pq+quiche.Sal*ab+paointegral.Sal*pi).toFixed(2),
        Salsa_e_Cebolinha: (rfrango.Cheiro_verde*pf).toFixed(2),
    }
    console.log
    //&rarr; ${}g<br>
    lista.innerHTML = 
    `
    Açucar &rarr; ${JSON.stringify(ingredietes.Acucar)}g<br>
    Agua &rarr;${JSON.stringify(ingredietes.Agua)}g<br>
    Alho Poró &rarr; ${JSON.stringify((ingredietes.Alho_poro*1.33).toFixed(2))}g<br>
    Aveia &rarr;${JSON.stringify(ingredietes.Aveia)}g<br>
    Azeite &rarr;${JSON.stringify(ingredietes.Azeite)}g<br>
    Bacon &rarr; ${JSON.stringify((ingredietes.Bacon*1.33).toFixed(2))}g<br>
    Cebola &rarr;${JSON.stringify(ingredietes.Cebola)}g<br>
    Creme de leite &rarr; ${JSON.stringify(ingredietes.Creme_de_leite)}g<br>
    Espinafre &rarr;${JSON.stringify((ingredietes.Espinafre*1.26).toFixed(2))}g<br>
    Farinha de Trigo &rarr;${JSON.stringify(ingredietes.Farinha_de_Trigo)}g<br>
    Farinha de Trigo Integral &rarr;${JSON.stringify(ingredietes.Farinha_de_Trigo_Integral)}g<br>
    Fermento de bolo &rarr; ${JSON.stringify(ingredietes.Fermento_bolo)}g<br>
    Fermento de pão &rarr; ${JSON.stringify(ingredietes.Fermento_pao)}g<br>
    Frango &rarr;${JSON.stringify((ingredietes.Frango*1.28).toFixed(2))}g<br>
    Gotas de Chocolate &rarr; ${JSON.stringify(ingredietes.Gotas_de_chocolate)}g<br>
    Laranja &rarr;${JSON.stringify(ingredietes.Laranja)}g<br>
    Leite &rarr; ${JSON.stringify(ingredietes.Leite)}g<br>
    Manteiga &rarr; ${JSON.stringify(ingredietes.Manteiga)}g<br>
    Margarina &rarr; ${JSON.stringify(ingredietes.Margarina)}g<br>
    Mussarela &rarr; ${JSON.stringify(ingredietes.Mussarela)}g<br>
    Noz moscada &rarr; ${JSON.stringify(ingredietes.Noz_moscada)}g<br>
    Óleo &rarr;${JSON.stringify(ingredietes.Oleo)}g<br>
    Ovo &rarr; ${JSON.stringify((ingredietes.Ovo/54).toFixed(2))}unid<br>
    Presunto &rarr; ${JSON.stringify(ingredietes.Presunto)}g<br>
    Queijo parmessão &rarr; ${JSON.stringify(ingredietes.Queijo_parmessao)}g<br>
    Ricota &rarr;${JSON.stringify(ingredietes.Ricota)}g<br>
    Sal &rarr;${JSON.stringify(ingredietes.Sal)}g<br>
    Salsa_e_Cebolinha &rarr;${JSON.stringify(ingredietes.Salsa_e_Cebolinha)}g<br>
    `    
    





}