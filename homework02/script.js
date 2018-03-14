var font = document.getElementById("fonts");
var background = document.getElementById("bgc");
var form = document.getElementsByTagName("FORM")[0];

font.addEventListener("change", function(){
  document.body.style.fontFamily = font.value;
  window.sessionStorage.fontFamily = font.value;
  console.log(font.value);
});

background.addEventListener("change", function(){
  document.body.style.backgroundColor = background.value;
  window.sessionStorage.backgroundColor = background.value;
  console.log(background.value);
});

var setProperties = function(){
  if (window.sessionStorage.backgroundColor){
    document.body.style.backgroundColor = window.sessionStorage.backgroundColor;
    document.body.style.fontFamily = window.sessionStorage.fontFamily;
    console.log("1");
  }else{
    document.body.style.backgroundColor = window.localStorage.backgroundColor;
    document.body.style.fontFamily = window.localStorage.fontFamily; 
    console.log("2");
  }
}

setProperties();

form.onsubmit = function(){
  window.localStorage.backgroundColor = document.body.style.backgroundColor;
  window.localStorage.fontFamily = document.body.style.fontFamily;
};
