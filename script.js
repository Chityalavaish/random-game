function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var clickedTime, createdTime, reactionTime

function makeBox() {
    createdTime = Date.now();
    var time = Math.random();
    time = time * 3000;
    setTimeout(function() {
        if(Math.random()> 0.75){
            document.getElementById("rectangle").style.borderRadius = "150px" ;
        } else {
            document.getElementById("rectangle").style.borderRadius = "0" ;
        }
        var top = Math.random();
        top = top * 400;

        var left = Math.random();
        left = left * 700;

        document.getElementById("rectangle").style.top = top + "px";
        document.getElementById("rectangle").style.left = left + "px";
        document.getElementById("rectangle").style.backgroundColor = getRandomColor();
        document.getElementById("rectangle").style.display = "block";
        } , time);
}

document.getElementById("rectangle").onclick = function () {
    clickedTime = Date.now();
    reactionTime = (clickedTime - createdTime) / 1000;
    document.getElementById("time").innerHTML = reactionTime;
    this.style.display = "none";
    makeBox();
}
makeBox();
