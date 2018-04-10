/*globals openDatabase, $*/
'use strict';

//criar o banco
var dataBase = openDatabase("estoque", "1.0", "estoque", 1048576);
var createTable = function () {
    dataBase.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS produto(id INTEGER PRIMARY KEY AUTOINCREMENT, descricao TEXT, quantidade INTEGER, valorUnitario REAL)', []);
    });
};

createTable();

var insertProduct = function (a, b, c) {
    dataBase.transaction(function (tx) {
        tx.executeSql('INSERT INTO produto (descricao, quantidade, valorUnitario) VALUES(?, ?, ?)', [a, b, c]);
    });
};

/*
var listar = function(){
  banco.transaction(function(tx){
    tx.executeSql('SELECT * FROM pessoa',[],function(tx,resposta){
      for(var i=0;i<resposta.rows.length;i++){
        console.log(resposta.rows[i].nome);
      }
    });
  });
}
*/

$("#submit").click(function () {
    insertProduct($("#desc").val(), $("#qtd").val(), $("#val").val());
});