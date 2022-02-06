//cria o banco de dados
var bd = openDatabase("Lista_de_tarefas","1.0","Objetos e cores",2*1024*1024);

bd.transaction( function(tr) {
//                                                  nome tabela (colunas)
    var comandoSQL = 'CREATE TABLE IF NOT EXISTS '+'tarefas (tarefa)';               
    tr.executeSql(comandoSQL);
});
exibir()

//---------------------------------------------------------------
//inserir os dados 
function inserir() {
    let tarefa = document.getElementById('nlist').value
    if (tarefa == "") {
        window.alert('Informe uma tarefa primeiro')
    } else{
        bd.transaction( function(tr) {
                                                        
            var comandoSQL = 'INSERT INTO tarefas VALUES(?)'               
            tr.executeSql(comandoSQL, [tarefa]);
        });
    }
    exibir()
}
//---------------------------------------------------------------
//exibir o conteudo do banco de dados
function exibir() {
    document.getElementById('conteudo').innerHTML = ""
    bd.transaction( function(tr) {
        //                                                
            var comandoSQL = 'SELECT * FROM tarefas'               
            tr.executeSql(comandoSQL, [], 
                function(tr, res) {
                    console.log(res.rows)
                    var linhatabela;
                    let cont = 0
                    
                    var resp = "<table>"
                    for(let linha of res.rows){
                        console.log('linha '+ res.rows.value)
                        linhatabela = linha
                        
                        resp +=  "<td>"+(++cont)+"</td>";
                        resp +=  "<td>"+linhatabela.tarefa+"</td>";
                        resp +=  "</tr>";
                        console.log('linhatabela '+JSON.stringify(linhatabela)  + ' linhatabela.tarefa '+linhatabela.tarefa)
                    }        
                    resp += "</table>"
                    
                    
                    document.getElementById('conteudo').innerHTML = resp
                },console.log('Executou SELECT'));
        });
}
//---------------------------------------------------------------
//Drop tabela
function drop_all() {
    bd.transaction( function(tr) {
        var comandoSQL =
            'DROP TABLE IF EXISTS tarefas'
        tr.executeSql(comandoSQL);
    });
    window.location.reload()
}