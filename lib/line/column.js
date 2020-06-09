"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _text = _interopRequireDefault(require("./text"));

var _color = _interopRequireDefault(require("../color/color.selection"));

var _option = _interopRequireDefault(require("../utils/option.manager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var getColumnRemainder = function getColumnRemainder(width) {
  return Math.max(_option["default"].columnWidth - width, 0);
};

var fillColumn = function fillColumn(width) {
  return ' '.repeat(getColumnRemainder(width));
};

var getText = function getText() {
  var texts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return texts.map(function (_ref) {
    var text = _ref.text;
    return text;
  }).join('');
};

var wrapGap = function wrapGap(_ref2) {
  var _ref2$background = _ref2.background,
      background = _ref2$background === void 0 ? '' : _ref2$background,
      _ref2$reset = _ref2.reset,
      reset = _ref2$reset === void 0 ? '' : _ref2$reset,
      _ref2$gap = _ref2.gap,
      gap = _ref2$gap === void 0 ? '' : _ref2$gap,
      _ref2$fill = _ref2.fill,
      fill = _ref2$fill === void 0 ? false : _ref2$fill;
  return fill ? "".concat(background).concat(gap).concat(reset) : gap;
};

var Column = /*#__PURE__*/function () {
  function Column(_ref3) {
    var text = _ref3.text,
        _ref3$isLastColumn = _ref3.isLastColumn,
        isLastColumn = _ref3$isLastColumn === void 0 ? false : _ref3$isLastColumn;

    _classCallCheck(this, Column);

    this.texts = _toConsumableArray(text ? [text] : []);
    this.isLastColumn = isLastColumn;
    this.colorSelection = _objectSpread({}, _color["default"].selection);
  }

  _createClass(Column, [{
    key: "append",
    value: function append() {
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _text["default"]();
      this.texts.push(text);
      return this;
    }
  }, {
    key: "text",
    get: function get() {
      return "".concat(getText(this.texts)).concat(this.gap);
    }
  }, {
    key: "width",
    get: function get() {
      return this.texts.reduce(function (total) {
        var _ref4 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            length = _ref4.length;

        return total + length;
      }, 0);
    }
  }, {
    key: "gap",
    get: function get() {
      return wrapGap(_objectSpread({
        gap: fillColumn(this.width)
      }, this.lastText));
    }
  }, {
    key: "lastText",
    get: function get() {
      var length = this.texts.length;
      return length > 0 ? this.texts[length - 1].last : {};
    }
  }]);

  return Column;
}();

var _default = Column;
exports["default"] = _default;