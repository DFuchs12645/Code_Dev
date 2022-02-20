
var bd = openDatabase("teste","1.0","Banco de dados de tarefas",2*1024*1024);

bd.transition(function(tr) {
    var comandoSQL = 'CREATE TABLE IF NOT EXISTS '+
                        'Teste(num);';
    tr.executeSql(comandoSQL);
})

function incluir(){
    console.log("incluindo...");
        var inc = document.getElementById("inclur");
        bd.transaction( function(tr) {
            var comandoSQL = 'INSERT INTO Teste(num) VALUES(?);';
            tr.executeSql(comandoSQL,[inc.value]);
            inc.value = "";
        });
    }
    
    function excluir(){
        console.log("excluindo...")
        console.log(Teste);
        var comandoSQL = 'DELETE FROM Teste WHERE rowid=?;';    
        bd.transaction( function(tr) {
            tr.executeSql(comandoSQL,[Teste]);
        });
    }