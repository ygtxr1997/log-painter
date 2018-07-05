/**@type {HTMLCanvasElement} */
var canvas = document.getElementById("myCanvas"),
    ctx = canvas.getContext('2d'),
    cW = canvas.width,
    cH = canvas.height,
    len = 30,
    w = cW / len,
    h = cH / len;
 
var i = 0;

function drawLine (x1, y1, x2, y2) {
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.stroke();
    window.moveTo(i, 300);
    i++;
}
 
// for (var i = 0; i <= len; i++) {
//     drawLine(w * i, 0, w * i, cH);
//     drawLine(0, h * i, cW, h * i);
// }

// var i = 0;
// while (i < 1000)
// {
//     setTimeout("drawLine(i, 300, i + 1, 300)", 10);
//     ++i;
// }

var tax = self.setInterval("drawLine(i, 300, i + 1, 300)", 10);

