"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CanvasPool = (function () {
    function CanvasPool() {
        this.pool = [];
    }
    CanvasPool.prototype.pull = function () {
        if (this.pool.length == 0) {
            var canvas = document.createElement('canvas');
            canvas.style.backgroundColor = '#007';
            this.pool.push(canvas);
        }
        return this.pool.shift();
    };
    CanvasPool.prototype.push = function (canvas) {
        this.pool.unshift(canvas);
    };
    return CanvasPool;
}());
var pools = new Map();
var canvas2pool = new Map();
function opt2key(opt) {
    return JSON.stringify(Object.keys(opt).sort().map(function (k) { return [k, opt[k]]; }));
}
function pull(opt) {
    var key = opt2key(opt);
    if (!pools.has(key))
        pools.set(key, new CanvasPool());
    var pool = pools.get(key);
    var canvas = pool.pull();
    var gl = canvas.getContext('webgl', opt);
    if (gl == null)
        throw new Error("gl == null");
    canvas2pool.set(canvas, pool);
    return { canvas: canvas, gl: gl };
}
exports.pull = pull;
function push(canvas) {
    canvas2pool.get(canvas).push(canvas);
}
exports.push = push;
