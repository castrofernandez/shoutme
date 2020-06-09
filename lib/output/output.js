"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _output = _interopRequireDefault(require("./output.inner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Output = /*#__PURE__*/function () {
  function Output() {
    _classCallCheck(this, Output);

    this.output = new _output["default"]();
  }

  _createClass(Output, [{
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

var _default = Output;
exports["default"] = _default;