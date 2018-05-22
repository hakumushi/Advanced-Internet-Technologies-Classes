var w;
var time;

function startWorker() {
    if(document.getElementById("btstart").innerHTML === "Start"){
        document.getElementById("btstart").innerHTML = "Pause";
        document.getElementById("btstop").disabled = false;
        if(document.getElementById("hour").innerHTML === "00:00:00"){
            if(typeof(Worker) !== "undefined") {
                if(typeof(w) == "undefined") {
                    w = new Worker("timer.js");
                }
                w.onmessage = function(event) {
                    document.getElementById("hour").innerHTML = showtime(event.data);
                };
            } else {
                document.getElementById("hour").innerHTML = "Sorry! No Web Worker support.";
            }
        }
        else{
            if(typeof(w) == "undefined") {
                w = new Worker("timer.js");
            }
            w.onmessage = function(event) {
                document.getElementById("hour").innerHTML = showtime(time + event.data);
            };
        }
    }else{
        document.getElementById("btstart").innerHTML = "Start";
        stopWorker();
        time = toSeconds(document.getElementById("hour").innerHTML);
    }
}

function stopWorker() { 
    w.terminate();
    w = undefined;
    document.getElementById("btstop").disabled = true;
}

function showtime(data){
    var date = new Date(null);
    date.setSeconds(data);
    return date.toISOString().substr(11, 8);
}

function toSeconds(time){
    seconds = parseInt(time.split(":")[0]) * 360;
    seconds +=  (parseInt(time.split(":")[1]) * 60);
    seconds +=  parseInt(time.split(":")[2]);
    return seconds;
}