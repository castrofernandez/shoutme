"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _column = _interopRequireDefault(require("./column"));

var _option = _interopRequireDefault(require("../utils/option.manager"));

var _text = _interopRequireDefault(require("./text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var rangeToFill = function rangeToFill(length) {
  return _toConsumableArray(Array(Math.max(_option["default"].columns - length, 0)).keys());
};

var emptyColumn = function emptyColumn() {
  return new _column["default"]({
    text: new _text["default"]()
  });
};

var Line = /*#__PURE__*/function () {
  function Line() {
    _classCallCheck(this, Line);

    this.columns = [];
  }

  _createClass(Line, [{
    key: "addColumn",
    value: function addColumn(text) {
      return this.full ? false : this.columns.push(new _column["default"]({
        text: text,
        isLastColumn: this.columns.length === _option["default"].columns - 1
      }));
    }
  }, {
    key: "append",
    value: function append(text) {
      return this.empty ? this.columns.push(new _column["default"]({
        text: text
      })) : this.lastColumn.append(text);
    }
  }, {
    key: "empty",
    get: function get() {
      return this.columns.length === 0;
    }
  }, {
    key: "full",
    get: function get() {
      return this.columns.length === _option["default"].columns;
    }
  }, {
    key: "length",
    get: function get() {
      return this.columns.length;
    }
  }, {
    key: "text",
    get: function get() {
      return [].concat(_toConsumableArray(this.columns.map(function () {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            text = _ref.text;

        return text;
      })), _toConsumableArray(rangeToFill(this.length).map(function () {
        return emptyColumn().text;
      })));
    }
  }, {
    key: "lastColumn",
    get: function get() {
      return this.columns[this.columns.length - 1] || {};
    }
  }]);

  return Line;
}();

var _default = Line;
exports["default"] = _default;