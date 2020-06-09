"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _line = _interopRequireDefault(require("../line/line"));

var _text = _interopRequireDefault(require("../line/text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var OutputInner = /*#__PURE__*/function () {
  function OutputInner() {
    _classCallCheck(this, OutputInner);

    this.lines = [];
    this.createNewLine();
  }

  _createClass(OutputInner, [{
    key: "createNewLine",
    value: function createNewLine() {
      this.lines.push(new _line["default"]());
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
      var line = this.getLineToAppendLine();
      line.append(text);
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
      return this.lines.map(function (_ref) {
        var text = _ref.text;
        return text;
      });
    }
  }]);

  return OutputInner;
}();

var _default = OutputInner;
exports["default"] = _default;