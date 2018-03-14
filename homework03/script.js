var getUsers = function(i){
    $.getJSON("https://jsonplaceholder.typicode.com/users", function(data){
        $("#name").text(data[i].name);
        $("#username").text(data[i].username);
        $("#email").text(data[i].email);
    })
}

getUsers(0);

$("#tab1").click(function(event){
    getUsers(0);
});

$("#tab2").click(function(event){
    getUsers(1);
});

$("#tab3").click(function(event){
    getUsers(2);
});