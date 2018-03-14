var bt = document.getElementById("controle");
var audio = document.getElementById("audio");
bt.addEventListener("click",function(){
  console.log(bt.innerHTML);
  if(bt.innerHTML=="play"){
    audio.play();
    bt.innerHTML = "pause";
  }else{
    audio.pause();
    bt.innerHTML = "play";
  }
});