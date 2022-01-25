var carros = [];
/*
openmodel   ok
closemodel  ok
cadaterveiculo ok
atualizartabela ok
limpartabela
pesquisarveiculo

*/
function openModal(id){
    document.getElementById(id).style.display = "block";
}

function closeModal(id){
    document.getElementById(id).style.display = "none";
}

function cadastrarVeiculo(from){
    /*
    criar uma lista de definição(carro/placa/dono)
    criar os objetos
    coloca no vetor carros
    atualizar tabela 
    fechar o model
    */
    let frm = document.forms[form];

    let veiculos={carro:"", placa:"", dono:""};

    carro.carro = frm.elements.carro.valve;
    carro.placa = frm.elements.placa.valve;
    carro.dono - frm.elements.dono.valve;

    carros.push(carro);

    atualizarTabela(carros);
    closeModal('model');

}

function atualizarTabela(carros){
    /*
    limpar tabela
    add o corpo da tabela
    coloca um contador
    */
    limparTabela();
    let corpo = document.getElementById('table-body');
    let cont = 0;
    carros.forEach((carro) =>
    {
        console.log(carro)
        let nova_linha = corpo.insertRow(cont);
        let celula_ordem = nova_linha.insertCell(0);
        let celula_carro = nova_linha.insertCell(1);
        let celula_placa = nova_linha.insertCell(2);
        let celula_dono = nova_linha.insertCell(3);

        celula_ordem.innerText = cont + 1;
        celula_carro.innerText = carro.carro;
        celula_placa.innerText = carro.placa;
        celula_dono.innerText = carro.dono;
        cont++;
    });
}

function limparTabela(){
    /*
    enquanto o numero de linhas da tabela for maior de 0 exclui a ultima linha
    */
       while(document.getElementById('table-body').rows.length > 0)
        document.getElementById('table-body').deleteRow(document.getElementById('table-body').rows.length - 1);
}

function pesquisarVeiculos(){
    /*
    extrai o valor digitado na parra de pequisa
    cria um vetor auxiliar 
    se o nome digitado estiver no banco de dados, apresenta os veiculos 
    caso não tenha nunhuma eiculo com aquele dono nd parece
    se a barra de pesquisa estiver em branco aparece toda a tabela
    */
    let filtro = document.getElementById('search').value;
    //console.log(filtro);
    let carros_ = [];

    if(filtro)
    {
        carros.forEach((carro) => 
        {
            if(carro.dono.toLowerCase() == filtro.toLowerCase())
            {
                carros_.push(carro);
            }  
        });
        atualizarTabela(carros_);
    }
    else
    {
        atualizarTabela(carros);
    }
}