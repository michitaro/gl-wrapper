"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sprintf_js_1 = require("sprintf-js");
function enable(gl, fs, callback) {
    for (var _i = 0, fs_1 = fs; _i < fs_1.length; _i++) {
        var f = fs_1[_i];
        gl.enable(f);
    }
    callback();
    for (var _a = 0, fs_2 = fs; _a < fs_2.length; _a++) {
        var f = fs_2[_a];
        gl.disable(f);
    }
}
exports.enable = enable;
function bind(bs, callback) {
    for (var _i = 0, bs_1 = bs; _i < bs_1.length; _i++) {
        var b = bs_1[_i];
        b.bind();
    }
    callback();
    for (var _a = 0, bs_2 = bs; _a < bs_2.length; _a++) {
        var b = bs_2[_a];
        b.unbind();
    }
}
exports.bind = bind;
function addLineNumber(body) {
    return body.split("\n")
        .map(function (line, n) { return sprintf_js_1.sprintf('%4d | %s', n + 1, line); })
        .join("\n");
}
exports.addLineNumber = addLineNumber;
function nonNull(v) {
    if (!v)
        throw new Error("non-null check error: " + v);
    return v;
}
exports.nonNull = nonNull;
