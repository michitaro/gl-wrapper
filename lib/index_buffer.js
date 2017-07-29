"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var glUtils = require("./utils");
var IndexBuffer = (function () {
    function IndexBuffer(gl, dataOption) {
        this.gl = gl;
        this.name = glUtils.nonNull(this.gl.createBuffer());
        if (dataOption)
            this.setData(dataOption);
    }
    IndexBuffer.prototype.release = function () {
        this.gl.deleteBuffer(this.name);
    };
    IndexBuffer.prototype.bind = function (cb) {
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.name);
        cb();
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);
    };
    IndexBuffer.prototype.setData = function (_a) {
        var usage = _a.usage, array = _a.array;
        this.usage = usage || this.gl.STATIC_DRAW;
        this.length = array.length;
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.name);
        this.gl.bufferData(this.gl.ELEMENT_ARRAY_BUFFER, array, this.usage);
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);
    };
    return IndexBuffer;
}());
exports.IndexBuffer = IndexBuffer;
