var client = new XMLHttpRequest();
client.open("POST", "https://www.facebook.com/", true, "desmennyellysson", "Desmenny123");
console.log(response);


dbLoja.transaction(function (tx) {
    tx.executeSql('CREATE TABLE produto(id INTEGER PRIMARY KEY AUTOINCREMENT, descricao TEXT, quantidade INTEGER, valorUnitario REAL)', []);
});