/*------------------ESCOPO GLOBAL------------------*/
var carros = [];
/*-------------------------------------------------*/

function openModal(id)
{
    document.getElementById(id).style.display = "block";
}

function closeModal(id)
{
    document.getElementById(id).style.display = "none";
}

function cadastrarVeiculo(form)
{
    let frm = document.forms[form];

    let carro = {carro: "", placa:"", dono: ""};
    carro.carro = frm.elements.carro.value;
    carro.placa = frm.elements.placa.value;
    carro.dono = frm.elements.dono.value;
    
    carros.push(carro);

    atualizarTabela(carros);
    closeModal('modal');
}

function atualizarTabela(carros)
{
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

function limparTabela()
{
    while(document.getElementById('table-body').rows.length > 0)
        document.getElementById('table-body').deleteRow(document.getElementById('table-body').rows.length - 1);
}

function pesquisarVeiculos()
{
    let filtro = document.getElementById('search').value;
    console.log(filtro);
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