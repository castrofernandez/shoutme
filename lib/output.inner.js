"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _line = _interopRequireDefault(require("./line"));

var _text = _interopRequireDefault(require("./text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
      this.lines.push(new _line["default"](this.options));
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
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _text["default"]();
      this.getLineToAppendLine().append(text);
      return this;
    }
  }, {
    key: "addNewColumn",
    value: function addNewColumn() {
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _text["default"]();
      this.getLineToAppendColumn().addColumn(text);
      return this;
    }
  }, {
    key: "appendToColumn",
    value: function appendToColumn() {
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _text["default"]();
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

var _default = OutputInner;
exports["default"] = _default;