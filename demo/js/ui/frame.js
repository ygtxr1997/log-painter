// 绘制网格
function drawLine (ctx, x1, y1, x2, y2) {
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#BEBEBE";
    ctx.stroke();
}

function drawGrid ()
{
    var gridSide = 30;
    
    /**@type {HTMLCanvasElement} */
    var board = document.getElementById('board');
    var ctx = board.getContext('2d'),
        cw = board.width,
        ch = board.height;

    // 竖线
    for (var i = 0; i < cw; i += gridSide)
    {
        //drawLine(ctx, i, 0, i, ch);
    }

    // 横线
    for (var i = 0; i < ch; i += gridSide)
    {
        drawLine(ctx, 0, i, cw, i);
    }
}

// 窗口大小变化
function resize()
{
    /**@type {HTMLDivElement} */
    /**@type {HTMLDivElement} */
    /**@type {HTMLCanvasElement} */
    var side_bar = document.getElementById('side_bar');
    var main_view = document.getElementById('main_view');
    var targetH = window.innerHeight + "px";

    side_bar.style.minHeight = targetH;
    main_view.style.minHeight = targetH;

    drawGrid();
}

window.onload = function(){
    canvas = document.getElementById("board");
    context = canvas.getContext("2d");
 
 
    function  drawGrid(stepX, stepY, lineWidth, color){
        context.save();
        context.lineWidth = lineWidth;
        context.strokeStyle = color;
        context.translate(0.5, 0.5)
        for(var i = stepY; i < context.canvas.height; i += stepY){
            context.beginPath();
            context.moveTo(0, i);
            context.lineTo(context.canvas.width, i);
            context.stroke();
        }
 
 
        for(var i = stepX; i < context.canvas.width; i += stepX){
            context.beginPath();
            context.moveTo(i, 0);
            context.lineTo(i, context.canvas.height);
            context.stroke();
        }
 
 
        context.restore();
    }
 
    drawGrid(100, 100, 1, 'gray');
};