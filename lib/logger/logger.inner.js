"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var colors = _interopRequireWildcard(require("../color/color.list"));

var _color2 = _interopRequireDefault(require("../color/color.manager"));

var _color3 = _interopRequireDefault(require("../color/color.selection"));

var _option = _interopRequireDefault(require("../utils/option.manager"));

var _text = _interopRequireDefault(require("../line/text"));

var _output = _interopRequireDefault(require("../output/output"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var printLine = function printLine() {
  var line = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return console.log(line.join(''));
};

var LoggerInner = /*#__PURE__*/function () {
  function LoggerInner() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$control = _ref.control,
        control = _ref$control === void 0 ? colors.control : _ref$control,
        _ref$foreground = _ref.foreground,
        foreground = _ref$foreground === void 0 ? colors.foreground : _ref$foreground,
        _ref$background = _ref.background,
        background = _ref$background === void 0 ? colors.background : _ref$background;

    _classCallCheck(this, LoggerInner);

    this.colorManager = new _color2["default"]({
      control: control,
      foreground: foreground,
      background: background
    });

    _color3["default"].setup(this.colorManager);

    this.reset();
  }

  _createClass(LoggerInner, [{
    key: "reset",
    value: function reset() {
      _color3["default"].reset();

      this.output = new _output["default"]();
      return this;
    }
  }, {
    key: "log",
    value: function log() {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.line(str);
      return this.print();
    }
  }, {
    key: "print",
    value: function print() {
      this.output.lines.forEach(function (line) {
        return printLine(line, _option["default"].options);
      });
      this.reset();
      return this;
    }
  }, {
    key: "formatText",
    value: function formatText() {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return new _text["default"](str);
    }
  }, {
    key: "line",
    value: function line() {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.output.addNewLine(this.formatText(str));
      return this;
    }
  }, {
    key: "column",
    value: function column() {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.output.addNewColumn(this.formatText(str));
      return this;
    }
  }, {
    key: "add",
    value: function add() {
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