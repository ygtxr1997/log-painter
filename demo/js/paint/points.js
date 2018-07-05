var matchTarget = {
    'pattern' : "",
    'min' : Number.MIN_SAFE_INTEGER,
    'max' : Number.MAX_SAFE_INTEGER,
    'arr' : []
}

class MatchTarget {
    constructor(arr) {
        /**@type  {Array<int>}*/
        this.arr = arr.concat();
    }

    calMinMax() {
        var len = this.arr.length;
        var min = Number.MAX_SAFE_INTEGER,
            max = Number.MIN_SAFE_INTEGER;
        for (var i = 0; i < len; ++i)
        {
            var tmp = this.arr[i];
            min = tmp < min ? tmp : min;
            max = tmp > max ? tmp : max;
        }
        this.min = min;
        this.max = max;
    }
}

var array = [0, 1, 2, 3, 4, 5, 6];
let obj = new MatchTarget(array);
obj.calMinMax(); 