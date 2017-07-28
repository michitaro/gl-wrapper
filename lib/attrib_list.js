"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var glUtils = require("./utils");
var AttribList = (function () {
    function AttribList(gl, data) {
        this.gl = gl;
        this.vertexCount = 0;
        this.bufferName = glUtils.nonNull(gl.createBuffer());
        if (data) {
            this.setData(data);
        }
    }
    AttribList.prototype.release = function () {
        this.gl.deleteBuffer(this.bufferName);
    };
    AttribList.prototype.setData = function (_a) {
        var members = _a.members, array = _a.array, _b = _a.usage, usage = _b === void 0 ? this.gl.STATIC_DRAW : _b;
        if (members) {
            this.members = members;
            this.stride = 0;
            this.offset = [];
            for (var _i = 0, members_1 = members; _i < members_1.length; _i++) {
                var m = members_1[_i];
                if (m.dataType == undefined)
                    m.dataType = this.gl.FLOAT;
                if (m.normalize == undefined)
                    m.normalize = false;
                this.offset.push(this.stride);
                this.stride += m.nComponents * sizeof(this.gl, m.dataType);
            }
        }
        if (array) {
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.bufferName);
            this.gl.bufferData(this.gl.ARRAY_BUFFER, array, usage);
            this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
            this.vertexCount = byteLength(array) / this.stride;
            if (this.vertexCount % 1 !== 0) {
                throw "nComponents may be invalid";
            }
        }
    };
    AttribList.prototype.enable = function (program, f) {
        program.use();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.bufferName);
        for (var i in this.members) {
            var m = this.members[i];
            this.gl.enableVertexAttribArray(program.attribLocation(m.name));
            this.gl.vertexAttribPointer(program.attribLocation(m.name), m.nComponents, m.dataType, m.normalize, this.stride, this.offset[i]);
        }
        f();
        for (var _i = 0, _a = this.members; _i < _a.length; _i++) {
            var m = _a[_i];
            this.gl.disableVertexAttribArray(program.attribLocation(m.name));
        }
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
    };
    return AttribList;
}());
exports.AttribList = AttribList;
function sizeof(gl, dataType) {
    switch (dataType) {
        case gl.FLOAT:
            return 4;
        default:
            throw "unknown type: " + dataType;
    }
}
function byteLength(array) {
    return array.length * array.BYTES_PER_ELEMENT;
}
