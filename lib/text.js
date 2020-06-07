"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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

var _default = Text;
exports["default"] = _default;