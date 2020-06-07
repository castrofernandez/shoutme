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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/color.manager.js":
/*!******************************!*\
  !*** ./src/color.manager.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = __webpack_require__(/*! ./utils */ "./src/utils.js"),
    getRandom = _require.getRandom;

var getRandomColorName = function getRandomColorName(colors) {
  return colors[getRandom(colors.length)];
};

var getEnum = function getEnum(list) {
  return list.reduce(function (total, item) {
    return _objectSpread(_objectSpread({}, total), {}, _defineProperty({}, item, item));
  }, {});
};

var filterNonBlack = function filterNonBlack(colors) {
  return colors.filter(function (color) {
    return color !== 'black';
  });
};

var ColorManager = /*#__PURE__*/function () {
  function ColorManager() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$control = _ref.control,
        control = _ref$control === void 0 ? [] : _ref$control,
        _ref$foreground = _ref.foreground,
        foreground = _ref$foreground === void 0 ? [] : _ref$foreground,
        _ref$background = _ref.background,
        background = _ref$background === void 0 ? [] : _ref$background;

    _classCallCheck(this, ColorManager);

    this.control = control;
    this.foreground = foreground;
    this.background = background;
  }

  _createClass(ColorManager, [{
    key: "getBackgroundList",
    value: function getBackgroundList() {
      return Object.keys(this.background);
    }
  }, {
    key: "getForegroundList",
    value: function getForegroundList() {
      return Object.keys(this.foreground);
    }
  }, {
    key: "getForeColor",
    value: function getForeColor() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return this.foreground[name] || '';
    }
  }, {
    key: "getBackColor",
    value: function getBackColor() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return this.background[name] || '';
    }
  }, {
    key: "compensateColor",
    value: function compensateColor(color) {
      return color === this.colors.black ? this.colors.white : this.colors.black;
    }
  }, {
    key: "getRandomForeColorName",
    value: function getRandomForeColorName() {
      return getRandomColorName(Object.keys(this.printableColors));
    }
  }, {
    key: "getRandomBackColorName",
    value: function getRandomBackColorName() {
      return getRandomColorName(Object.keys(this.colors));
    }
  }, {
    key: "reset",
    get: function get() {
      return this.control.reset;
    }
  }, {
    key: "colors",
    get: function get() {
      return getEnum(this.getForegroundList());
    }
  }, {
    key: "printableColors",
    get: function get() {
      return getEnum(filterNonBlack(Object.keys(this.getForegroundList())));
    }
  }]);

  return ColorManager;
}();

/* harmony default export */ __webpack_exports__["default"] = (ColorManager);

/***/ }),

/***/ "./src/colors.list.js":
/*!****************************!*\
  !*** ./src/colors.list.js ***!
  \****************************/
/*! exports provided: control, foreground, background */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "control", function() { return control; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foreground", function() { return foreground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "background", function() { return background; });
var control = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  underscore: '\x1b[4m',
  blink: '\x1b[5m',
  reverse: '\x1b[7m',
  hidden: '\x1b[8m'
};
var foreground = {
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m'
};
var background = {
  black: '\x1b[40m',
  red: '\x1b[41m',
  green: '\x1b[42m',
  yellow: '\x1b[43m',
  blue: '\x1b[44m',
  magenta: '\x1b[45m',
  cyan: '\x1b[46m',
  white: '\x1b[47m'
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "./src/logger.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/* harmony default export */ __webpack_exports__["default"] = (_logger__WEBPACK_IMPORTED_MODULE_0__["default"]);

if (typeof window !== 'undefined' && (typeof window === "undefined" ? "undefined" : _typeof(window)) === 'object') {
  window['shoutme'] = logger;
}

/***/ }),

/***/ "./src/line.js":
/*!*********************!*\
  !*** ./src/line.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text */ "./src/text.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Line = /*#__PURE__*/function () {
  function Line() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$columns = _ref.columns,
        columns = _ref$columns === void 0 ? 1 : _ref$columns;

    _classCallCheck(this, Line);

    this.options = {
      columns: columns
    };
    this.data = [];
  }

  _createClass(Line, [{
    key: "addColumn",
    value: function addColumn() {
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _text__WEBPACK_IMPORTED_MODULE_0__["default"]();
      return this.full ? false : this.data.push(text);
    }
  }, {
    key: "append",
    value: function append() {
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _text__WEBPACK_IMPORTED_MODULE_0__["default"]();
      return this.empty ? this.data.push(text) : this.data[this.data.length - 1].append(text);
    }
  }, {
    key: "empty",
    get: function get() {
      return this.data.length === 0;
    }
  }, {
    key: "columns",
    get: function get() {
      return this.options.columns;
    }
  }, {
    key: "full",
    get: function get() {
      return this.data.length === this.columns;
    }
  }, {
    key: "text",
    get: function get() {
      return this.data.map(function () {
        var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            data = _ref2.data;

        return data;
      });
    }
  }]);

  return Line;
}();

/* harmony default export */ __webpack_exports__["default"] = (Line);

/***/ }),

/***/ "./src/logger.inner.js":
/*!*****************************!*\
  !*** ./src/logger.inner.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colors_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors.list */ "./src/colors.list.js");
/* harmony import */ var _color_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.manager */ "./src/color.manager.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./text */ "./src/text.js");
/* harmony import */ var _output__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./output */ "./src/output.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var DEFAULT_COLUMNS = 3;
var DEFAULT_TERMINAL_WIDTH = 80;
var FILL_WITH_FORMAT = false;
var DEFAULT_OPTIONS = {
  columns: DEFAULT_COLUMNS,
  width: DEFAULT_TERMINAL_WIDTH,
  fillWithFormat: FILL_WITH_FORMAT
};

var getColorByIndex = function getColorByIndex() {
  var colors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return colors[index % colors.length];
};

var getColumnWidth = function getColumnWidth() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? DEFAULT_TERMINAL_WIDTH : _ref$width,
      _ref$columns = _ref.columns,
      columns = _ref$columns === void 0 ? DEFAULT_COLUMNS : _ref$columns;

  return Math.floor(width / columns);
};

var printLine = function printLine() {
  var line = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var options = arguments.length > 1 ? arguments[1] : undefined;
  return console.log(line.join(''));
};

var LoggerInner = /*#__PURE__*/function () {
  function LoggerInner() {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$control = _ref2.control,
        control = _ref2$control === void 0 ? _colors_list__WEBPACK_IMPORTED_MODULE_0__["control"] : _ref2$control,
        _ref2$foreground = _ref2.foreground,
        foreground = _ref2$foreground === void 0 ? _colors_list__WEBPACK_IMPORTED_MODULE_0__["foreground"] : _ref2$foreground,
        _ref2$background = _ref2.background,
        background = _ref2$background === void 0 ? _colors_list__WEBPACK_IMPORTED_MODULE_0__["background"] : _ref2$background,
        _ref2$options = _ref2.options,
        options = _ref2$options === void 0 ? DEFAULT_OPTIONS : _ref2$options;

    _classCallCheck(this, LoggerInner);

    this.colorManager = new _color_manager__WEBPACK_IMPORTED_MODULE_1__["default"]({
      control: control,
      foreground: foreground,
      background: background
    });
    this.reset();
    this.foreIndex = 0;
    this.backIndex = 0;
    this.options = _objectSpread({}, options);
    this.columnWidth = getColumnWidth(options);
  }

  _createClass(LoggerInner, [{
    key: "setOptions",
    value: function setOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.options = _objectSpread(_objectSpread({}, this.options), options);
      this.restoreOutputOptions();
    }
  }, {
    key: "restoreOptions",
    value: function restoreOptions() {
      this.options = _objectSpread({}, DEFAULT_OPTIONS);
      this.restoreOutputOptions();
    }
  }, {
    key: "restoreOutputOptions",
    value: function restoreOutputOptions() {
      this.output.setOptions(this.options);
    }
  }, {
    key: "background",
    value: function background() {
      var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.backName = color;
      this.assignBack(color);
      return this;
    }
  }, {
    key: "randomBackground",
    value: function randomBackground() {
      this.backName = this.colorManager.getRandomBackColorName();
      this.assignBack(this.backName);
      return this;
    }
  }, {
    key: "nextBackground",
    value: function nextBackground() {
      this.backName = getColorByIndex(this.colorManager.getBackgroundList(), this.backIndex);
      this.assignBack(this.backName);
      this.backIndex++;
      return this;
    }
  }, {
    key: "foreground",
    value: function foreground() {
      var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.foreName = color;
      this.assignFore(color);
      return this;
    }
  }, {
    key: "randomForeround",
    value: function randomForeround() {
      this.foreName = this.colorManager.getRandomForeColorName();
      this.assignFore(this.foreName);
      return this;
    }
  }, {
    key: "nextForeground",
    value: function nextForeground() {
      this.foreName = getColorByIndex(this.colorManager.getForegroundList(), this.foreIndex);
      this.assignFore(this.foreName);
      this.foreIndex++;
      return this;
    }
  }, {
    key: "assignBack",
    value: function assignBack(color) {
      this.back = this.colorManager.getBackColor(color);
    }
  }, {
    key: "assignFore",
    value: function assignFore(color) {
      this.fore = this.colorManager.getForeColor(color);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.backName = '';
      this.assignBack(this.backName);
      this.foreName = 'white';
      this.assignFore(this.foreName);
      this.output = new _output__WEBPACK_IMPORTED_MODULE_3__["default"](this.options);
      return this;
    }
  }, {
    key: "isForeEqualToBack",
    value: function isForeEqualToBack() {
      return this.foreName === this.backName;
    }
  }, {
    key: "compensate",
    value: function compensate() {
      this.fore = this.isForeEqualToBack() ? this.colorManager.getForeColor(this.colorManager.compensateColor(this.foreName)) : this.fore;
    }
  }, {
    key: "log",
    value: function log() {
      var _this = this;

      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.appendLine(str);
      this.output.lines.forEach(function (line) {
        return printLine(line, _this.options);
      });
      this.reset();
      return this;
    }
  }, {
    key: "formatText",
    value: function formatText() {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.compensate();
      return new _text__WEBPACK_IMPORTED_MODULE_2__["default"]({
        background: this.back,
        foreground: this.fore,
        reset: this.colorManager.reset,
        columnWidth: this.columnWidth,
        fillWithFormat: this.options.fillWithFormat,
        value: str
      });
    }
  }, {
    key: "appendLine",
    value: function appendLine() {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.output.addNewLine(this.formatText(str));
      return this;
    }
  }, {
    key: "appendColumn",
    value: function appendColumn() {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.output.addNewColumn(this.formatText(str));
      return this;
    }
  }, {
    key: "appendToColumn",
    value: function appendToColumn() {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.output.appendToColumn(this.formatText(str));
      return this;
    }
  }, {
    key: "colors",
    get: function get() {
      return this.colorManager.colors;
    }
  }]);

  return LoggerInner;
}();

/* harmony default export */ __webpack_exports__["default"] = (LoggerInner);

/***/ }),

/***/ "./src/logger.js":
/*!***********************!*\
  !*** ./src/logger.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _logger_inner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger.inner */ "./src/logger.inner.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Logger = /*#__PURE__*/function () {
  function Logger() {
    _classCallCheck(this, Logger);

    this.logger = new _logger_inner__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  _createClass(Logger, [{
    key: "restoreOptions",
    value: function restoreOptions() {
      this.logger.restoreOptions();
    }
  }, {
    key: "background",
    value: function background() {
      var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.logger.background(color);
      return this;
    }
  }, {
    key: "randomBackground",
    value: function randomBackground() {
      this.logger.randomBackground(color);
      return this;
    }
  }, {
    key: "nextBackground",
    value: function nextBackground() {
      this.logger.nextBackground();
      return this;
    }
  }, {
    key: "foreground",
    value: function foreground() {
      var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.logger.foreground(color);
      return this;
    }
  }, {
    key: "randomForeround",
    value: function randomForeround() {
      this.logger.randomForeround();
      return this;
    }
  }, {
    key: "nextForeground",
    value: function nextForeground() {
      this.logger.nextForeground();
      return this;
    }
  }, {
    key: "log",
    value: function log() {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.logger.log(str);
      return this;
    }
  }, {
    key: "appendLine",
    value: function appendLine() {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.logger.appendLine(str);
      return this;
    }
  }, {
    key: "appendColumn",
    value: function appendColumn() {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.logger.appendColumn(str);
      return this;
    }
  }, {
    key: "appendToColumn",
    value: function appendToColumn() {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.logger.appendToColumn(str);
      return this;
    }
  }, {
    key: "colors",
    get: function get() {
      return this.logger.colors;
    }
  }, {
    key: "options",
    set: function set() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.logger.setOptions(opts);
    }
  }]);

  return Logger;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Logger());

/***/ }),

/***/ "./src/output.inner.js":
/*!*****************************!*\
  !*** ./src/output.inner.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _line__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line */ "./src/line.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./text */ "./src/text.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var OutputInner = /*#__PURE__*/function () {
  function OutputInner() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, OutputInner);

    this.options = options;
    this.lines = [];
    this.createNewLine();
  }

  _createClass(OutputInner, [{
    key: "setOptions",
    value: function setOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.options = _objectSpread(_objectSpread({}, this.options), options);
    }
  }, {
    key: "createNewLine",
    value: function createNewLine() {
      this.lines.push(new _line__WEBPACK_IMPORTED_MODULE_0__["default"](this.options));
      return this.lastLine;
    }
  }, {
    key: "getLineToAppendLine",
    value: function getLineToAppendLine() {
      return this.lastLine.empty ? this.lastLine : this.createNewLine();
    }
  }, {
    key: "getLineToAppendColumn",
    value: function getLineToAppendColumn() {
      return this.lastLine.full ? this.createNewLine() : this.lastLine;
    }
  }, {
    key: "addNewLine",
    value: function addNewLine() {
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _text__WEBPACK_IMPORTED_MODULE_1__["default"]();
      this.getLineToAppendLine().append(text);
      return this;
    }
  }, {
    key: "addNewColumn",
    value: function addNewColumn() {
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _text__WEBPACK_IMPORTED_MODULE_1__["default"]();
      this.getLineToAppendColumn().addColumn(text);
      return this;
    }
  }, {
    key: "appendToColumn",
    value: function appendToColumn() {
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _text__WEBPACK_IMPORTED_MODULE_1__["default"]();
      this.getLineToAppendColumn().append(text);
      return this;
    }
  }, {
    key: "lastLine",
    get: function get() {
      return this.lines[this.lines.length - 1];
    }
  }, {
    key: "text",
    get: function get() {
      return this.lines.map(function (line) {
        return line.text;
      });
    }
  }]);

  return OutputInner;
}();

/* harmony default export */ __webpack_exports__["default"] = (OutputInner);

/***/ }),

/***/ "./src/output.js":
/*!***********************!*\
  !*** ./src/output.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _output_inner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./output.inner */ "./src/output.inner.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Output = /*#__PURE__*/function () {
  function Output(options) {
    _classCallCheck(this, Output);

    this.output = new _output_inner__WEBPACK_IMPORTED_MODULE_0__["default"](options);
  }

  _createClass(Output, [{
    key: "setOptions",
    value: function setOptions(options) {
      return this.output.setOptions(options);
    }
  }, {
    key: "addNewLine",
    value: function addNewLine(text) {
      this.output.addNewLine(text);
      return this;
    }
  }, {
    key: "addNewColumn",
    value: function addNewColumn(text) {
      this.output.addNewColumn(text);
      return this;
    }
  }, {
    key: "appendToColumn",
    value: function appendToColumn(text) {
      this.output.appendToColumn(text);
      return this;
    }
  }, {
    key: "lines",
    get: function get() {
      return this.output.text;
    }
  }]);

  return Output;
}();

/* harmony default export */ __webpack_exports__["default"] = (Output);

/***/ }),

/***/ "./src/text.js":
/*!*********************!*\
  !*** ./src/text.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var getColumnRemainder = function getColumnRemainder(length) {
  var width = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return Math.max(width - length, 0);
};

var fillColumn = function fillColumn() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$length = _ref.length,
      length = _ref$length === void 0 ? 0 : _ref$length;

  var width = arguments.length > 1 ? arguments[1] : undefined;
  return ' '.repeat(getColumnRemainder(length, width));
};

var getFilledText = function getFilledText(_ref2) {
  var value = _ref2.value,
      reset = _ref2.reset,
      gap = _ref2.gap,
      fillWithFormat = _ref2.fillWithFormat;
  return fillWithFormat ? "".concat(value).concat(gap).concat(reset) : "".concat(value).concat(reset).concat(gap);
};

var Text = /*#__PURE__*/function () {
  function Text() {
    var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref3$background = _ref3.background,
        background = _ref3$background === void 0 ? '' : _ref3$background,
        _ref3$foreground = _ref3.foreground,
        foreground = _ref3$foreground === void 0 ? '' : _ref3$foreground,
        _ref3$reset = _ref3.reset,
        reset = _ref3$reset === void 0 ? '' : _ref3$reset,
        _ref3$value = _ref3.value,
        value = _ref3$value === void 0 ? '' : _ref3$value,
        columnWidth = _ref3.columnWidth,
        _ref3$fillWithFormat = _ref3.fillWithFormat,
        fillWithFormat = _ref3$fillWithFormat === void 0 ? false : _ref3$fillWithFormat;

    _classCallCheck(this, Text);

    this.background = background;
    this.foreground = foreground;
    this.reset = reset;
    this.value = value;
    this.columnWidth = columnWidth;
    this.fillWithFormat = fillWithFormat;
  }

  _createClass(Text, [{
    key: "append",
    value: function append() {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$value = _ref4.value,
          value = _ref4$value === void 0 ? '' : _ref4$value;

      this.value += value;
    }
  }, {
    key: "gap",
    get: function get() {
      return fillColumn(this.value, this.columnWidth);
    }
  }, {
    key: "data",
    get: function get() {
      return "".concat(this.background).concat(this.foreground).concat(getFilledText({
        value: this.value,
        reset: this.reset,
        gap: this.gap,
        fillWithFormat: this.fillWithFormat
      }));
    }
  }]);

  return Text;
}();

/* harmony default export */ __webpack_exports__["default"] = (Text);

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: getRandom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandom", function() { return getRandom; });
var getRandom = function getRandom(n) {
  return Math.floor(Math.random() * n);
};

/***/ })

/******/ });
//# sourceMappingURL=index.js.map