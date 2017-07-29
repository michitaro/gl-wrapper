"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var glUtils = require("./utils");
var tuple_map_1 = require("@hscmap/tuple-map");
var Program = (function () {
    function Program(gl, vertSource, fragSource) {
        this.gl = gl;
        this.vertSource = vertSource;
        this.fragSource = fragSource;
        this.attribLocationMemo = new Map();
        this.uniformLocationMemo = new Map();
        this.refCount = 1;
        this.vertShader = this.createShader(vertSource, this.gl.VERTEX_SHADER);
        this.fragShader = this.createShader(fragSource, this.gl.FRAGMENT_SHADER);
        this.name = glUtils.nonNull(this.gl.createProgram());
        this.gl.attachShader(this.name, this.vertShader);
        this.gl.attachShader(this.name, this.fragShader);
        this.gl.linkProgram(this.name);
        if (!this.gl.getProgramParameter(this.name, this.gl.LINK_STATUS)) {
            throw "WebGL link error: " + this.gl.getProgramInfoLog(this.name);
        }
    }
    Program.prototype.retain = function () {
        ++this.refCount;
        return this;
    };
    Program.new = function (gl, vertSource, fragSource) {
        var cachedProgram = Program.cache.get([gl, vertSource, fragSource]);
        if (cachedProgram) {
            return cachedProgram.retain();
        }
        else {
            var program = new Program(gl, vertSource, fragSource);
            this.cache.set([gl, vertSource, fragSource], program);
            return program;
        }
    };
    Program.prototype.release = function () {
        if (--this.refCount == 0) {
            this.gl.deleteShader(this.fragShader);
            this.gl.deleteShader(this.vertShader);
            this.gl.deleteProgram(this.name);
            Program.cache.delete([this.gl, this.vertSource, this.fragSource]);
        }
    };
    Program.prototype.use = function () {
        this.gl.useProgram(this.name);
    };
    Program.prototype.attribLocation = function (varName) {
        var location = this.attribLocationMemo.get(varName);
        if (location == undefined)
            location = this.gl.getAttribLocation(this.name, varName);
        if (location == -1)
            throw "unknown attribute: " + varName;
        this.attribLocationMemo.set(varName, location);
        return location;
    };
    Program.prototype.uniformLocation = function (varName) {
        var location = this.uniformLocationMemo.get(varName);
        if (location == undefined)
            location = this.gl.getUniformLocation(this.name, varName);
        if (location == null)
            throw "unknown uniform: " + varName;
        this.uniformLocationMemo.set(varName, location);
        return location;
    };
    Program.prototype.enableAttribList = function (attribList, cb) {
        this.use();
        attribList.enable(this, cb);
    };
    Program.prototype.uniformMatrix4fv = function (matrices, transpose) {
        if (transpose === void 0) { transpose = false; }
        for (var name_1 in matrices) {
            var matrix = matrices[name_1];
            this.gl.uniformMatrix4fv(this.uniformLocation(name_1), transpose, matrix);
        }
    };
    Program.prototype.uniform1f = function (vars) {
        for (var name_2 in vars) {
            this.gl.uniform1f(this.uniformLocation(name_2), vars[name_2]);
        }
    };
    Program.prototype.uniform1i = function (vars) {
        for (var name_3 in vars) {
            this.gl.uniform1i(this.uniformLocation(name_3), vars[name_3]);
        }
    };
    Program.prototype.uniform3fv = function (vars) {
        for (var name_4 in vars) {
            this.gl.uniform3fv(this.uniformLocation(name_4), vars[name_4]);
        }
    };
    Program.prototype.uniform4fv = function (vars) {
        for (var name_5 in vars) {
            this.gl.uniform4fv(this.uniformLocation(name_5), vars[name_5]);
        }
    };
    Program.prototype.createShader = function (source, type) {
        var shader = this.gl.createShader(type);
        this.gl.shaderSource(shader, source);
        this.gl.compileShader(shader);
        if (!this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS)) {
            throw "WebGL shader compile error: " + this.gl.getShaderInfoLog(shader) + "\nsource:\n" + glUtils.addLineNumber(source);
        }
        return glUtils.nonNull(shader);
    };
    Program.cache = new tuple_map_1.TupleMap();
    return Program;
}());
exports.Program = Program;
