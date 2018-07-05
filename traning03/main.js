window.onload = function(){
    canvas = document.getElementById("canvas");
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
