// 匹配值的数据结构
class MatchTarget {
    constructor(arr) {
        /**@type  {Array<int>}*/
        this.arr = arr.concat();
        this.calMinMax();
    }

    calMinMax() {
        var len = this.arr.length;
        var min = Number.MAX_SAFE_INTEGER,
            max = Number.MIN_SAFE_INTEGER;
        for (var i = 0; i < len; ++i) {
            var tmp = this.arr[i];
            min = tmp < min ? tmp : min;
            max = tmp > max ? tmp : max;
        }
        this.min = min;
        this.max = max;
    }

    addNum(num) {
        this.arr.push(num);
        this.arr.min = this.arr.min < num ? this.arr.min : num;
        this.arr.max = this.arr.max > num ? this.arr.max : num;
    }

    size() {
        return this.arr.length;
    }

    at(index) {
        return this.arr[index];
    }
}

var array = [3993,
    1178,
    404,
    4998,
    4720,
    4352,
    2812,
    2296,
    894,
    903,
    4422,
    3417,
    2328,
    3819,
    1135,
    1296,
    3697
];
let obj = new MatchTarget(array);


// 横轴、纵轴单位分量
var xUnit = 1,
    yUnit = 1;
const kDistrib = 7.5;
function updateUnitValue() {
    /** @type {HTMLCanvasElement} */
    var board = document.getElementById('board');
    xUnit = board.width / obj.size();
    yUnit = board.height / kDistrib;
}

// 计算像素坐标值
/** @type {Array<int>} xPixPos */
/** @type {Array<int>} yPixPos */
var xPixPos, yPixPos;
function calPointPixPos() {
    /** @type {HTMLCanvasElement} */
    var board = document.getElementById('board');
    var size = obj.size();

    updateUnitValue();

    xPixPos = new Array(size);
    yPixPos = new Array(size);
    for (var i = 0; i < size; ++i) {
        var x = i * xUnit;
        var y = board.height * (1 - (obj.at(i) - obj.min) / (obj.max - obj.min));
        xPixPos[i] = x;
        yPixPos[i] = y;
    }
}

/**
 * 绘制平滑曲线。
 *
 * @param  {HTMLContextElement}  context Canvas 的 context
 * @param  {Array}   points  曲线顶点坐标数组，
 *                           points[i+0] 是第 i 个点的 x 坐标，
 *                           points[i+1] 是第 i 个点的 y 坐标
 * @param  {Boolean} showPoints 是否绘制曲线的顶点
 * @param  {Float}   tension    密集程度，默认为 0.5
 * @param  {Boolean} closed     是否创建闭合曲线，默认为 false
 * @param  {Int}     numberOfSegments 平滑曲线 2 个顶点间的线段数，默认为 16
 * @return 无返回值
 */
function drawSmoothCurve(context, points, showPoints, tension, closed, numberOfSegments) {
    context.lineWidth = 3;
    context.strokeStyle = "blue";
    drawLines(context, createSmoothCurvePoints(points, tension, closed, numberOfSegments));
    showPoints && drawPoints(context, points);
}
/**
 * 使用传入的曲线的顶点坐标创建平滑曲线的顶点。
 *
 * @param  {Array}   points  曲线顶点坐标数组，
 *                           points[i+0] 是第 i 个点的 x 坐标，
 *                           points[i+1] 是第 i 个点的 y 坐标
 * @param  {Float}   tension 密集程度，默认为 0.5
 * @param  {Boolean} closed  是否创建闭合曲线，默认为 false
 * @param  {Int}     numberOfSegments 平滑曲线 2 个顶点间的线段数，默认为 16
 * @return {Array}   平滑曲线的顶点坐标数组
 */
function createSmoothCurvePoints(points, tension, closed, numberOfSegments) {
    if (points.length < 4) {
        return points;
    }
    // use input value if provided, or use a default value
    tension = tension ? tension : 0.5;
    closed = closed ? true : false;
    numberOfSegments = numberOfSegments ? numberOfSegments : 16;
    var ps = points.slice(0), // clone array so we don't change the original
        result = [], // result points
        x, y, // our x,y coords
        t1x, t2x, t1y, t2y, // tension vectors
        c1, c2, c3, c4, // cardinal points
        st, t, i; // steps based on number of segments
    // The algorithm require a previous and next point to the actual point array.
    // Check if we will draw closed or open curve.
    // If closed, copy end points to beginning and first points to end
    // If open, duplicate first points to befinning, end points to end
    if (closed) {
        ps.unshift(points[points.length - 1]);
        ps.unshift(points[points.length - 2]);
        ps.unshift(points[points.length - 1]);
        ps.unshift(points[points.length - 2]);
        ps.push(points[0]);
        ps.push(points[1]);
    } else {
        ps.unshift(points[1]); // copy 1st point and insert at beginning
        ps.unshift(points[0]);
        ps.push(points[points.length - 2]); // copy last point and append
        ps.push(points[points.length - 1]);
    }
    // 1. loop goes through point array
    // 2. loop goes through each segment between the 2 points + 1e point before and after
    for (i = 2; i < (ps.length - 4); i += 2) {
        // calculate tension vectors
        t1x = (ps[i + 2] - ps[i - 2]) * tension;
        t2x = (ps[i + 4] - ps[i - 0]) * tension;
        t1y = (ps[i + 3] - ps[i - 1]) * tension;
        t2y = (ps[i + 5] - ps[i + 1]) * tension;
        for (t = 0; t <= numberOfSegments; t++) {
            // calculate step
            st = t / numberOfSegments;
            // calculate cardinals
            c1 = 2 * Math.pow(st, 3) - 3 * Math.pow(st, 2) + 1;
            c2 = -(2 * Math.pow(st, 3)) + 3 * Math.pow(st, 2);
            c3 = Math.pow(st, 3) - 2 * Math.pow(st, 2) + st;
            c4 = Math.pow(st, 3) - Math.pow(st, 2);
            // calculate x and y cords with common control vectors
            x = c1 * ps[i] + c2 * ps[i + 2] + c3 * t1x + c4 * t2x;
            y = c1 * ps[i + 1] + c2 * ps[i + 3] + c3 * t1y + c4 * t2y;
            //store points in array
            result.push(x);
            result.push(y);
        }
    }
    return result;
}
function drawLines(context, points) {
    context.beginPath();
    context.moveTo(points[0], points[1]);
    for (i = 2; i < points.length - 1; i += 2) {
        context.lineTo(points[i], points[i + 1]);
    }
    context.stroke();
}
function drawPoints(context, points) {
    for (var i = 0; i < points.length - 1; i += 2) {
        context.beginPath();
        context.arc(points[i], points[i + 1], 3, 0, Math.PI * 2);
        context.fill();
    }
}

// 画直线图
function paintPointsStrength() {
    /** @type {HTMLCanvasElement} */
    var board = document.getElementById('board');
    var ctx = board.getContext('2d');
    var size = obj.size();

    for (var i = 0; i < size - 1; ++i) {
        drawLine(ctx, xPixPos[i], yPixPos[i], xPixPos[i + 1], yPixPos[i + 1], 3, "red");
    }

}
// 画平滑曲线图
function paintPointsSmooth() {
    /** @type {HTMLCanvasElement} */
    var board = document.getElementById('board');
    var ctx = board.getContext('2d');
    ctx.clearRect(0, 0, board.width, board.height);
    var points = new Array(obj.size() * 2);
    for (var i = 0; i < obj.size(); ++i) {
        points[2 * i] = xPixPos[i];
        points[2 * i + 1] = yPixPos[i];
    }

    drawSmoothCurve(ctx, points, true, 0.5, false, 16);
}

// 在 Grid 上绘制网格
function drawLine(ctx, x1, y1, x2, y2, width, color) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.stroke();
}
var grid = document.getElementById('grid');
var ctx = grid.getContext('2d');
ctx.translate(0.5, 0.5);
function drawGrid() {
    var gridSide = 150;

    /** @type {HTMLCanvasElement} */
    var grid = document.getElementById('grid');
    var ctx = grid.getContext('2d'),
        cw = grid.width,
        ch = grid.height;
    ctx.clearRect(0, 0, cw, ch);
   

    // 竖线
    for (var i = 0; i < cw; i += gridSide) {
        drawLine(ctx, i, 0, i, ch, 1, "black");
    }

    // 横线
    for (var i = ch; i > 0; i -= gridSide) {
        drawLine(ctx, 0, i, cw, i, 1, "black");
    }
}

// 窗口大小变化
function resize() {
    /** @type {HTMLDivElement} */
    /** @type {HTMLDivElement} */
    /** @type {HTMLDivElement} */
    var main_view = document.getElementById('main_view');
    var side_bar = document.getElementById('side_bar');
    var wrapper = document.getElementById('canvas-wrapper');
    var targetH = window.innerHeight + "px";

    main_view.style.Height = targetH;
    side_bar.style.minHeight = targetH;

    var boardLeft = (window.innerWidth - 200) / 2 - 360 + 200;
    wrapper.style.left = boardLeft + "px";
    drawGrid();

    calPointPixPos();
    paintPointsSmooth();
    
}

window.onload = resize;
window.onresize = resize;


//生成从minNum到maxNum的随机数
function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
} 
function test() {
    var newNum = randomNum(800, 5000);
    obj.addNum(newNum);
    resize();
}
window.setInterval("test()", 1000);