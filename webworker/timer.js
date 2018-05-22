var seconds = 0;
function timedCount() {
    seconds = seconds + 1;
    postMessage(seconds);
    setTimeout("timedCount()",500);
}

timedCount();