/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var sprintf_js_1 = __webpack_require__(5);
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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(16);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = __webpack_require__(3);
window.addEventListener('load', function (e) { return __awaiter(_this, void 0, void 0, function () {
    var _a, canvas, gl, mp, img;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = src_1.canvasPool.pull({ alpha: false }), canvas = _a.canvas, gl = _a.gl;
                mp = document.querySelector('#mount-point').appendChild(canvas);
                canvas.style.width = '100%';
                canvas.style.height = '100%';
                resizeCanvasContext(canvas);
                return [4 /*yield*/, loadImage(__webpack_require__(11))];
            case 1:
                img = _b.sent();
                draw(gl, img);
                return [2 /*return*/];
        }
    });
}); });
function resizeCanvasContext(canvas) {
    var gl = canvas.getContext('webgl');
    var r = devicePixelRatio;
    var w = r * canvas.clientWidth;
    var h = r * canvas.clientHeight;
    canvas.width = w;
    canvas.height = h;
    gl.viewport(0, 0, w, h);
}
function loadImage(url) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve) {
                    var img = new Image();
                    img.onload = function () {
                        resolve(img);
                    };
                    img.src = url;
                })];
        });
    });
}
function draw(gl, img) {
    gl.clear(gl.COLOR_BUFFER_BIT);
    drawRGBTriangle(gl);
    drawTexture(gl, img);
}
function drawRGBTriangle(gl) {
    var program = src_1.Program.new(gl, __webpack_require__(12), __webpack_require__(13));
    var attribList = new src_1.AttribList(gl, {
        members: [
            { name: 'a_coord', nComponents: 2 },
            { name: 'a_color', nComponents: 4 },
        ],
        array: new Float32Array([
            /* a_coord */ -1, -1, /* a_color */ +1, +0, +0, +1,
            /* a_coord */ +1, -1, /* a_color */ +0, +1, +0, +1,
            /* a_coord */ +0, +1, /* a_color */ +0, +0, +1, +1,
        ])
    });
    var start = performance.now();
    attribList.enable(program, function () {
        gl.drawArrays(gl.TRIANGLES, 0, attribList.vertexCount);
    });
    program.release();
    attribList.release();
}
function drawTexture(gl, img) {
    var program = src_1.Program.new(gl, __webpack_require__(14), __webpack_require__(15));
    var attribList = new src_1.AttribList(gl, {
        members: [{ name: 'a_coord', nComponents: 2 }],
        array: new Float32Array([
            0, 0,
            1, 0,
            0, 1,
            1, 1,
        ])
    });
    var texture = new src_1.Texture(gl);
    texture.setImage(img);
    program.uniform1i({ u_texture0: 0 });
    attribList.enable(program, function () {
        src_1.utils.bind([texture], function () {
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, attribList.vertexCount);
        });
    });
    program.release();
    attribList.release();
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var canvasPool = __webpack_require__(4);
exports.canvasPool = canvasPool;
var utils = __webpack_require__(0);
exports.utils = utils;
var program_1 = __webpack_require__(6);
exports.Program = program_1.Program;
var attrib_list_1 = __webpack_require__(8);
exports.AttribList = attrib_list_1.AttribList;
var index_buffer_1 = __webpack_require__(9);
exports.IndexBuffer = index_buffer_1.IndexBuffer;
var texture_1 = __webpack_require__(10);
exports.Texture = texture_1.Texture;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* global window, exports, define */

!function() {
    'use strict'

    var re = {
        not_string: /[^s]/,
        not_bool: /[^t]/,
        not_type: /[^T]/,
        not_primitive: /[^v]/,
        number: /[diefg]/,
        numeric_arg: /[bcdiefguxX]/,
        json: /[j]/,
        not_json: /[^j]/,
        text: /^[^\x25]+/,
        modulo: /^\x25{2}/,
        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
        key: /^([a-z_][a-z_\d]*)/i,
        key_access: /^\.([a-z_][a-z_\d]*)/i,
        index_access: /^\[(\d+)\]/,
        sign: /^[\+\-]/
    }

    function sprintf(key) {
        // `arguments` is not an array, but should be fine for this call
        return sprintf_format(sprintf_parse(key), arguments)
    }

    function vsprintf(fmt, argv) {
        return sprintf.apply(null, [fmt].concat(argv || []))
    }

    function sprintf_format(parse_tree, argv) {
        var cursor = 1, tree_length = parse_tree.length, arg, output = '', i, k, match, pad, pad_character, pad_length, is_positive, sign
        for (i = 0; i < tree_length; i++) {
            if (typeof parse_tree[i] === 'string') {
                output += parse_tree[i]
            }
            else if (Array.isArray(parse_tree[i])) {
                match = parse_tree[i] // convenience purposes only
                if (match[2]) { // keyword argument
                    arg = argv[cursor]
                    for (k = 0; k < match[2].length; k++) {
                        if (!arg.hasOwnProperty(match[2][k])) {
                            throw new Error(sprintf('[sprintf] property "%s" does not exist', match[2][k]))
                        }
                        arg = arg[match[2][k]]
                    }
                }
                else if (match[1]) { // positional argument (explicit)
                    arg = argv[match[1]]
                }
                else { // positional argument (implicit)
                    arg = argv[cursor++]
                }

                if (re.not_type.test(match[8]) && re.not_primitive.test(match[8]) && arg instanceof Function) {
                    arg = arg()
                }

                if (re.numeric_arg.test(match[8]) && (typeof arg !== 'number' && isNaN(arg))) {
                    throw new TypeError(sprintf('[sprintf] expecting number but found %T', arg))
                }

                if (re.number.test(match[8])) {
                    is_positive = arg >= 0
                }

                switch (match[8]) {
                    case 'b':
                        arg = parseInt(arg, 10).toString(2)
                        break
                    case 'c':
                        arg = String.fromCharCode(parseInt(arg, 10))
                        break
                    case 'd':
                    case 'i':
                        arg = parseInt(arg, 10)
                        break
                    case 'j':
                        arg = JSON.stringify(arg, null, match[6] ? parseInt(match[6]) : 0)
                        break
                    case 'e':
                        arg = match[7] ? parseFloat(arg).toExponential(match[7]) : parseFloat(arg).toExponential()
                        break
                    case 'f':
                        arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg)
                        break
                    case 'g':
                        arg = match[7] ? String(Number(arg.toPrecision(match[7]))) : parseFloat(arg)
                        break
                    case 'o':
                        arg = (parseInt(arg, 10) >>> 0).toString(8)
                        break
                    case 's':
                        arg = String(arg)
                        arg = (match[7] ? arg.substring(0, match[7]) : arg)
                        break
                    case 't':
                        arg = String(!!arg)
                        arg = (match[7] ? arg.substring(0, match[7]) : arg)
                        break
                    case 'T':
                        arg = Object.prototype.toString.call(arg).slice(8, -1).toLowerCase()
                        arg = (match[7] ? arg.substring(0, match[7]) : arg)
                        break
                    case 'u':
                        arg = parseInt(arg, 10) >>> 0
                        break
                    case 'v':
                        arg = arg.valueOf()
                        arg = (match[7] ? arg.substring(0, match[7]) : arg)
                        break
                    case 'x':
                        arg = (parseInt(arg, 10) >>> 0).toString(16)
                        break
                    case 'X':
                        arg = (parseInt(arg, 10) >>> 0).toString(16).toUpperCase()
                        break
                }
                if (re.json.test(match[8])) {
                    output += arg
                }
                else {
                    if (re.number.test(match[8]) && (!is_positive || match[3])) {
                        sign = is_positive ? '+' : '-'
                        arg = arg.toString().replace(re.sign, '')
                    }
                    else {
                        sign = ''
                    }
                    pad_character = match[4] ? match[4] === '0' ? '0' : match[4].charAt(1) : ' '
                    pad_length = match[6] - (sign + arg).length
                    pad = match[6] ? (pad_length > 0 ? pad_character.repeat(pad_length) : '') : ''
                    output += match[5] ? sign + arg + pad : (pad_character === '0' ? sign + pad + arg : pad + sign + arg)
                }
            }
        }
        return output
    }

    var sprintf_cache = Object.create(null)

    function sprintf_parse(fmt) {
        if (sprintf_cache[fmt]) {
            return sprintf_cache[fmt]
        }

        var _fmt = fmt, match, parse_tree = [], arg_names = 0
        while (_fmt) {
            if ((match = re.text.exec(_fmt)) !== null) {
                parse_tree.push(match[0])
            }
            else if ((match = re.modulo.exec(_fmt)) !== null) {
                parse_tree.push('%')
            }
            else if ((match = re.placeholder.exec(_fmt)) !== null) {
                if (match[2]) {
                    arg_names |= 1
                    var field_list = [], replacement_field = match[2], field_match = []
                    if ((field_match = re.key.exec(replacement_field)) !== null) {
                        field_list.push(field_match[1])
                        while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
                            if ((field_match = re.key_access.exec(replacement_field)) !== null) {
                                field_list.push(field_match[1])
                            }
                            else if ((field_match = re.index_access.exec(replacement_field)) !== null) {
                                field_list.push(field_match[1])
                            }
                            else {
                                throw new SyntaxError('[sprintf] failed to parse named argument key')
                            }
                        }
                    }
                    else {
                        throw new SyntaxError('[sprintf] failed to parse named argument key')
                    }
                    match[2] = field_list
                }
                else {
                    arg_names |= 2
                }
                if (arg_names === 3) {
                    throw new Error('[sprintf] mixing positional and named placeholders is not (yet) supported')
                }
                parse_tree.push(match)
            }
            else {
                throw new SyntaxError('[sprintf] unexpected placeholder')
            }
            _fmt = _fmt.substring(match[0].length)
        }
        return sprintf_cache[fmt] = parse_tree
    }

    /**
     * export to either browser or node.js
     */
    /* eslint-disable quote-props */
    if (true) {
        exports['sprintf'] = sprintf
        exports['vsprintf'] = vsprintf
    }
    if (typeof window !== 'undefined') {
        window['sprintf'] = sprintf
        window['vsprintf'] = vsprintf

        if (true) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
                return {
                    'sprintf': sprintf,
                    'vsprintf': vsprintf
                }
            }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
        }
    }
    /* eslint-enable quote-props */
}()


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var glUtils = __webpack_require__(0);
var tuple_map_1 = __webpack_require__(7);
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
    Program.prototype.enableAttribList = function (attribList, callback) {
        attribList.enable(this, callback);
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


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TupleMap = (function () {
    function TupleMap() {
        this.m = new Map();
        this.idMaker = new TupleIdMaker();
    }
    TupleMap.prototype.get = function (key) {
        var id = this.idMaker.get(key);
        var value = this.m.get(id);
        this.idMaker.forget(key);
        return value;
    };
    TupleMap.prototype.set = function (key, value) {
        var id = this.idMaker.get(key);
        if (this.m.has(id))
            this.idMaker.forget(key);
        this.m.set(id, value);
        return this;
    };
    TupleMap.prototype.has = function (key) {
        var id = this.idMaker.get(key);
        var has = this.m.has(id);
        this.idMaker.forget(key);
        return has;
    };
    TupleMap.prototype.delete = function (key) {
        var id = this.idMaker.get(key);
        this.m.delete(id);
        this.idMaker.forget(key);
        this.idMaker.forget(key);
        return true;
    };
    TupleMap.prototype.clear = function () {
        this.m.clear();
        this.idMaker.clear();
    };
    return TupleMap;
}());
exports.TupleMap = TupleMap;
var TupleIdMaker = (function () {
    function TupleIdMaker() {
        this.idMaker = new IdMaker();
    }
    TupleIdMaker.prototype.get = function (key) {
        var _this = this;
        return key.map(function (k) { return _this.idMaker.get(k); }).join('-');
    };
    TupleIdMaker.prototype.forget = function (key) {
        var _this = this;
        key.forEach(function (k) { return _this.idMaker.forget(k); });
    };
    TupleIdMaker.prototype.clear = function () { this.idMaker.clear(); };
    return TupleIdMaker;
}());
var IdMaker = (function () {
    function IdMaker() {
        this.serialNumber = 0;
        this.m = new Map();
    }
    IdMaker.prototype.get = function (key) {
        var idInfo = this.m.get(key);
        if (idInfo != undefined) {
            ++idInfo.refCount;
            return idInfo.value;
        }
        else {
            var value = ++this.serialNumber;
            this.m.set(key, {
                refCount: 1,
                value: value
            });
            return value;
        }
    };
    IdMaker.prototype.forget = function (key) {
        var idInfo = this.m.get(key);
        if (--idInfo.refCount == 0)
            this.m.delete(key);
    };
    IdMaker.prototype.clear = function () {
        this.m.clear();
    };
    return IdMaker;
}());


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var glUtils = __webpack_require__(0);
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


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var glUtils = __webpack_require__(0);
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
    IndexBuffer.prototype.bind = function () {
        this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, this.name);
    };
    IndexBuffer.prototype.unbind = function () {
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


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var glUtils = __webpack_require__(0);
var Texture = (function () {
    function Texture(gl) {
        var _this = this;
        this.gl = gl;
        this.name = glUtils.nonNull(gl.createTexture());
        glUtils.bind([this], function () {
            gl.texParameteri(_this.gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(_this.gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
            gl.texParameteri(_this.gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(_this.gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        });
    }
    Texture.prototype.release = function () {
        this.gl.deleteTexture(this.name);
    };
    Texture.prototype.bind = function () {
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.name);
    };
    Texture.prototype.unbind = function () {
        this.gl.bindTexture(this.gl.TEXTURE_2D, null);
    };
    Texture.prototype.setImage = function (img) {
        var _this = this;
        glUtils.bind([this], function () {
            _this.gl.texImage2D(_this.gl.TEXTURE_2D, 0, _this.gl.RGBA, _this.gl.RGBA, _this.gl.UNSIGNED_BYTE, img);
        });
    };
    return Texture;
}());
exports.Texture = Texture;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fd2cafd7ca2131a0de8f78be7e44d26c.jpg";

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "attribute  vec2   a_coord;\nattribute  vec4   a_color;\nvarying    vec4   v_color;\n\nvoid main() {\n    v_color = a_color;\n    gl_Position = vec4(a_coord, 0., 1.);\n}"

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nvarying    vec4   v_color;\n\n\nvoid main(void){\n    gl_FragColor = vec4(v_color);\n}"

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "attribute  vec2   a_coord;\nvarying    vec2   v_coord;\n\nvoid main() {\n    v_coord = a_coord;\n    gl_Position = vec4(0.5 * a_coord, 0., 1.);\n}"

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "precision mediump float;\nvarying vec2      v_coord;\nuniform sampler2D u_texture0;\n\n\nvoid main(void){\n    gl_FragColor = texture2D(u_texture0, vec2(\n             v_coord.x,\n        1. - v_coord.y\n    ));\n}"

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index.html";

/***/ })
/******/ ]);