function PI(deg)
{
    return deg/180*Math.PI;
}

function draw()
{
    /** @type {HTMLCanvasElement} */
    var myCanvas = document.getElementById("myCanvas");
    var myContext = myCanvas.getContext("2d");
    var pi = Math.PI;

    myContext.beginPath();
    myContext.arc(200, 200, 100, PI(-90), PI(0), false);
    myContext.lineWidth = 10;
    myContext.strokeStyle = "black";
    myContext.stroke();
    myContext.closePath();
}

window.onload=function()
{
    draw();
}