
var bd = openDatabase("bdTarefas","1.0","Banco de dados de tarefas",2*1024*1024);

bd.transition(function(tr) {
    var comando = 'CREATE TABLE IF NOT EXISTS'+
})
