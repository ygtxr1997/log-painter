function PI(deg)
{
    return deg/180*Math.PI;
}

function draw()
{
    var myCanvas = document.getElementById("myCanvas");
    var myContext = myCanvas.getContext("2d");
    var pi = Math.PI;

    myCanvas.getC

    myContext.beginPath();
    myContext.arc(200, 200, 100, PI(-90), PI(0), false);
    myContext.lineWidth = 10;
    myContext.strokeStyle = "black";
    myContext.stroke();
}

window.onload=function()
{
    draw();
}