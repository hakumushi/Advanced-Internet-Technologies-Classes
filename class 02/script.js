$("#btCarregar0").click(function(event){
    $("#conteudoAjax").load("https://jsonplaceholder.typicode.com/posts/1");
});

$("#btCarregar1").click(function(event){
    $.getJSON("https://jsonplaceholder.typicode.com/posts/1", function(data){
        $("#conteudoAjax").html(data.title);
    });
});