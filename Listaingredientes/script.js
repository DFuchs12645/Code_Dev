function caling(){
    var lista = document.getElementById('lista')

    var pf = Number(document.getElementById('pf').value)
    var pe = Number(document.getElementById('pe').value)
    var qpq = Number(document.getElementById('qpq').value)
    var qab = Number(document.getElementById('qab').value)
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

    Molho 10unid--1unid
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
        // Aveia 0,FT 1,FTI 2,oleo 3,sal 4,agua 5
    var massapastel = [5.34, 10.591, 10.591, 1.905, 0.169, 11.481]
        // Ricota 0, Cebola 1, Oleo 2, Espinafre 3 
    var recheioespinafre = [37.38, 2.67, 0.392, 5.785]
        // Ricota 0, Cebola 1, Oleo 2, frango 3, salsa e cebolinha 4
    var recheiofrango = [37.38, 2.67, 0.392, 5.34, 0.534]
        //Ovo 0, Margarina 1, Oleo 2, FT 3, Creme de leite 4, Parmesão 5, leite 6, fermentobolo 7, sal 8, Noz moscada 9
    var quichemssmlh = [14.8, 11, 5, 30, 10, 0.2, 20, 0.7, 0.3, 0.04]
        //presunto 0, mussarela 1, ricota 2
    var qpresunto =[13, 12, 18]
        //alho poró 0, bacon 1, ricota 2
    var qalho = [7, 7, 18]
        //Farinha de trigo 0, Ovo 1, Leite 2, fermento pão 3, açucar 4, gotas de chocolate 5, manteiga 6, oleo 7
    var roscachocolate = [600, 114, 240, 10, 60, 300, 50, 108]
        //laranja 0, ovo 1, oleo 2, açucar 3, farinha de trigo 4, fermento bolo 5
    var bololaranja = [458, 189, 150, 325, 250, 15]
    //Ovo 0, azeite 1, fermento pão 2, sal 3, farinha de trigo integral 4, aveia 5, farinha de trigo 6, açucar 7, agua 8
    var paointegral = [57, 27, 10, 9, 286, 27, 70, 25, 285]

    var ingredietes = {
        //ingrdiente: (onde usa)*(qtd)
        Acucar:(roscachocolate[4]*rc+bololaranja[3]*bl+paointegral[7]*pi).toFixed(2),
        Agua: (massapastel[5]*pf+massapastel[5]*pe+paointegral[8]*pi).toFixed(2),
        Alho_poro:(qalho[0]*qab).toFixed(2),
        Aveia: (massapastel[0]*pf+massapastel[0]*pe+paointegral[5]*pi).toFixed(2),
        Azeite:(paointegral[1]*pi).toFixed(2),
        Bacon:(qalho[1]*qab).toFixed(2),
        Cebola: (recheiofrango[1]*pf+recheioespinafre[1]*pe).toFixed(2),
        Creme_de_leite:(quichemssmlh[4]*qpq+quichemssmlh[4]*qpq).toFixed(2),
        Espinafre: (recheioespinafre[3]*pe).toFixed(2),
        Farinha_de_Trigo: (massapastel[1]*pf+massapastel[1]*pe+quichemssmlh[3]*qpq+quichemssmlh[3]*qpq+roscachocolate[0]*rc+bololaranja[4]*bl+paointegral[6]*pi).toFixed(2),
        Farinha_de_Trigo_Integral: (massapastel[2]*pf+massapastel[2]*pe+paointegral[4]*pi).toFixed(2),
        Fermento_bolo:(quichemssmlh[7]*qpq+quichemssmlh[7]*qpq+bololaranja[5]*bl).toFixed(2),
        Fermento_pao:(roscachocolate[3]*rc+paointegral[2]*pi).toFixed(2),
        Frango: (recheiofrango[3]*pf).toFixed(2),
        Gotas_de_chocolate:(roscachocolate[5]*rc).toFixed(2),
        Laranja:(bololaranja[0]*bl).toFixed(2),
        Leite:(quichemssmlh[6]*qpq+quichemssmlh[6]*qpq+roscachocolate[2]*rc).toFixed(2),
        Manteiga:(roscachocolate[6]*rc),
        Margarina:(quichemssmlh[1]*qpq+quichemssmlh[1]*qpq).toFixed(2),
        Mussarela:(qpresunto[1]*qpq).toFixed(2),
        Noz_moscada:(quichemssmlh[9]*qpq+quichemssmlh[9]*qpq).toFixed(2),
        Oleo: (massapastel[3]*pf+massapastel[3]*pe+recheiofrango[2]*pf+recheioespinafre[2]*pe+quichemssmlh[2]*qpq+quichemssmlh[2]*qpq+roscachocolate[7]*rc+bololaranja[2]*bl).toFixed(2),
        Ovo:(quichemssmlh[0]*qpq+quichemssmlh[0]*qpq+roscachocolate[1]*rc+bololaranja[2]*bl+paointegral[0]*pi).toFixed(2),
        Presunto:(qpresunto[0]*qpq).toFixed(2),
        Queijo_parmessao:(quichemssmlh[5]*qpq+quichemssmlh[5]*qpq).toFixed(2),
        Ricota: (recheiofrango[0]*pf+recheioespinafre[0]*pe+qpresunto[2]*qpq+qalho[2]*qab).toFixed(2),
        Sal: (massapastel[4]*pf+massapastel[4]*pe+quichemssmlh[8]*qpq+quichemssmlh[8]*qpq+paointegral[3]*pi).toFixed(2),
        Salsa_e_Cebolinha: (recheiofrango[4]*pf).toFixed(2),
    }
    //&rarr; ${}g<br>
    lista.innerHTML = 
    `
    Açucar &rarr; ${JSON.stringify(ingredietes.Acucar)}g<br>
    Agua &rarr;${JSON.stringify(ingredietes.Agua)}g<br>
    Alho Poró &rarr; ${JSON.stringify((ingredietes.Alho_poro*1,33).toFixed(2))}g<br>
    Aveia &rarr;${JSON.stringify(ingredietes.Aveia)}g<br>
    Azeite &rarr;${JSON.stringify(ingredietes.Azeite)}g<br>
    Bacon &rarr; ${JSON.stringify((ingredietes.Bacon*1.33).toFixed(2))}g<br>
    Cebola &rarr;${JSON.stringify(ingredietes.Cebola)}g<br>
    Creme de leite &rarr; ${JSON.stringify(ingredietes.Creme_de_leite)}g<br>
    Espinafre &rarr;${JSON.stringify(ingredietes.Espinafre*1.26)}g<br>
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
    Ovo &rarr; ${JSON.stringify((ingredietes.Ovo/54).toFixed(2))}g<br>
    Presunto &rarr; ${JSON.stringify(ingredietes.Presunto)}g<br>
    Queijo parmessão &rarr; ${JSON.stringify(ingredietes.Queijo_parmessao)}g<br>
    Ricota &rarr;${JSON.stringify(ingredietes.Ricota)}g<br>
    Sal &rarr;${JSON.stringify(ingredietes.Sal)}g<br>
    Salsa_e_Cebolinha &rarr;${JSON.stringify(ingredietes.Salsa_e_Cebolinha)}g<br>
    `    
    





}