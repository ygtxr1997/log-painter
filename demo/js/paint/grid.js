function drawGrid ()
{
    var gridSide = 30;
    
    /**@type {HTMLCanvasElement} */
    var board = document.getElementById('board');
    var ctx = board.getContext('2d'),
        cw = board.width,
        ch = board.height;

    function drawLine (x1, y1, x2, y2) {
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineWidth = 1;
        ctx.strokeStyle = "#BEBEBE";
        ctx.stroke();
    }

    // 竖线
    for (var i = 0; i < cw; i += gridSide)
    {
        drawLine(i, ch, i, 0);
    }

    // 横线
    for (var i = 0; i < ch; i += gridSide)
    {
        drawLine(0, i, cw, i);
    }
}



