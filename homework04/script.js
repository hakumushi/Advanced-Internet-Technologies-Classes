var activeList;
if(window.sessionStorage.activeList){
    activeList = window.sessionStorage.activeList;
};

var getUSers = function(list){
    var ul = document.createElement("UL");
    for (i=0; i < list.length; i++) {
        var li = document.createElement("LI");
        li.innerHTML = list[i].name;
        ul.appendChild(li);
    }
    $("#general-list").html(ul); 
};

if(!window.sessionStorage.generalList){
    //getUSers(JSON.parse(window.sessionStorage.generalList));
}else{
    $.getJSON("https://jsonplaceholder.typicode.com/users/",   function(data){
        getUSers(data);
    });
};

$('.list').click(function(e){
    activeList = e.target.id;
    window.sessionStorage.activeList = activeList;
});
  
var addList = function(element){
    var list = document.getElementById(activeList);
    if(!list){
        alert("Choose a team.");
    }
    else if(list.childElementCount === 5){
        alert("This team has already 5 members.");
    }
    else{
        list.appendChild(element);
        window.sessionStorage.generalList = $('#general-list ul');
        window.sessionStorage.list1 = $('#list1');
        window.sessionStorage.list2 = $('#list2');
        if($('#general-list ul').children().length === 0){
            $("#general-list").append("No more people to choose.");
        }
    }
};

$("#general-list").click(function(e) {
    var li = e.target;
    addList(li);
});

