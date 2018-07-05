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
    var gridSide = 150;
    
    /**@type {HTMLCanvasElement} */
    var board = document.getElementById('board');
    var ctx = board.getContext('2d'),
        cw = board.width,
        ch = board.height;
    ctx.translate(0.5, 0.5);

    // 竖线
    for (var i = 0; i < cw; i += gridSide)
    {
        drawLine(ctx, i, 0, i, ch);
    }

    // 横线
    for (var i = ch; i > 0; i -= gridSide)
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
    var main_view = document.getElementById('main_view');
    var side_bar = document.getElementById('side_bar');
    var board = document.getElementById('board');
    var targetH = window.innerHeight + "px";

    main_view.style.Height = targetH;
    side_bar.style.minHeight = targetH;

    var boardLeft = (window.innerWidth - 200) / 2 - 360 + 200;
    board.style.left = boardLeft + "px"; 
    drawGrid();
}

window.onload = resize;
window.onresize = resize;