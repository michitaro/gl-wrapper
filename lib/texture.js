"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var glUtils = require("./utils");
var Texture = (function () {
    function Texture(gl) {
        var _this = this;
        this.gl = gl;
        this.name = glUtils.nonNull(gl.createTexture());
        this.bind(function () {
            gl.texParameteri(_this.gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(_this.gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            gl.texParameteri(_this.gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(_this.gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        });
    }
    Texture.prototype.release = function () {
        this.gl.deleteTexture(this.name);
    };
    Texture.prototype.bind = function (cb) {
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.name);
        cb();
        this.gl.bindTexture(this.gl.TEXTURE_2D, null);
    };
    Texture.prototype.setImage = function (img) {
        var _this = this;
        this.bind(function () {
            _this.gl.texImage2D(_this.gl.TEXTURE_2D, 0, _this.gl.RGBA, _this.gl.RGBA, _this.gl.UNSIGNED_BYTE, img);
        });
    };
    return Texture;
}());
exports.Texture = Texture;
