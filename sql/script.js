//criar o banco

var banco = openDatabase("estoque","1.0","estoque",1048576);
var criarTabela = function(){
  banco.transaction(function(tx){
    tx.executeSql('CREATE TABLE IF NOT EXISTS produto(id INTEGER PRIMARY KEY AUTOINCREMENT, descricao TEXT, quantidade INTEGER, valorUnitario REAL)',[]);
  });
}

criarTabela();
/*
var inserirLinhas = function(a,b){
  banco.transaction(function(tx){
    tx.executeSql('INSERT INTO produto VALUES(?,?, ?)',[a,b,c]);
  });
}
var listar = function(){
  banco.transaction(function(tx){
    tx.executeSql('SELECT * FROM pessoa',[],function(tx,resposta){
      for(var i=0;i<resposta.rows.length;i++){
        console.log(resposta.rows[i].nome);
      }
    });
  });
}


var bt = document.getElementById("add");
bt.addEventListener("click",function(){
  var nome = document.getElementById("nome").value;
  var email = document.getElementById("email").value;
  inserirLinhas(nome,email);
});
*/

$("#insert").submit(function() {
    var lol = $("input");
    //var lol2 = $("input:second").val();
    console.log(lol[0]);
});


