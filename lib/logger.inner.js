"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var colors = _interopRequireWildcard(require("./colors.list"));

var _color = _interopRequireDefault(require("./color.manager"));

var _text = _interopRequireDefault(require("./text"));

var _output = _interopRequireDefault(require("./output"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
        control = _ref2$control === void 0 ? colors.control : _ref2$control,
        _ref2$foreground = _ref2.foreground,
        foreground = _ref2$foreground === void 0 ? colors.foreground : _ref2$foreground,
        _ref2$background = _ref2.background,
        background = _ref2$background === void 0 ? colors.background : _ref2$background,
        _ref2$options = _ref2.options,
        options = _ref2$options === void 0 ? DEFAULT_OPTIONS : _ref2$options;

    _classCallCheck(this, LoggerInner);

    this.colorManager = new _color["default"]({
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
      this.output = new _output["default"](this.options);
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
      return new _text["default"]({
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

var _default = LoggerInner;
exports["default"] = _default;