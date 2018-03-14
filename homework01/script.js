//declaração de variáveis
var bts = document.getElementById("listaMusicas");
var ul = document.getElementById("ulPlaylist");
var audio = document.getElementById("audio");
var titulo = document.getElementById("titulo");
var ctrls = document.getElementById("ctrlButtons");


//eventos
bts.addEventListener("click",function(e){
  if(e.target.tagName=="BUTTON"){
    addPlaylist(e.target.dataset.nome,e.target.dataset.src);
  }
});
ul.addEventListener("click",function(e){
  if(e.target.tagName=="A"){
    e.preventDefault();
    audio.src = e.target.href;
    titulo.innerHTML = e.target.innerHTML;
    audio.play();
  }
});
ctrls.addEventListener("click",function(e){
  if(e.target.tagName == "BUTTON"){
    var action = e.target.dataset.action;
    if(action == "play"){
      audio.play();
    }else if(action == "stop"){
      audio.pause();
    }else{
      console.log("falta fazer");
    }
  }
});

var addPlaylist = function(nome,src){
  var li = document.createElement("LI");
  var a = document.createElement("A");
  var button = document.createElement("BUTTON")
  a.href=src;
  a.innerHTML=nome;
  button.innerHTML="-";
  button.className = "btAdd btn";
  li.appendChild(a);
  li.appendChild(button);
  li.className = "list-group-item";
  ul.appendChild(li);
}