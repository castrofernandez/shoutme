"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _text = _interopRequireDefault(require("./text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _text["default"]();
      return this.full ? false : this.data.push(text);
    }
  }, {
    key: "append",
    value: function append() {
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _text["default"]();
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

var _default = Line;
exports["default"] = _default;