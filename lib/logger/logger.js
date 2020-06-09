"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _logger = _interopRequireDefault(require("./logger.inner"));

var _color = _interopRequireDefault(require("../color/color.selection"));

var _option = _interopRequireDefault(require("../utils/option.manager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Logger = /*#__PURE__*/function () {
  function Logger() {
    _classCallCheck(this, Logger);

    this.logger = new _logger["default"]();
  }

  _createClass(Logger, [{
    key: "back",
    value: function back() {
      var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      _color["default"].back(color);

      return this;
    }
  }, {
    key: "randomBack",
    value: function randomBack() {
      _color["default"].randomBack(color);

      return this;
    }
  }, {
    key: "nextBack",
    value: function nextBack() {
      _color["default"].nextBack();

      return this;
    }
  }, {
    key: "fore",
    value: function fore() {
      var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      _color["default"].fore(color);

      return this;
    }
  }, {
    key: "randomFore",
    value: function randomFore() {
      _color["default"].randomFore();

      return this;
    }
  }, {
    key: "nextFore",
    value: function nextFore() {
      _color["default"].nextFore();

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
    key: "print",
    value: function print() {
      this.logger.print();
      return this;
    }
  }, {
    key: "line",
    value: function line() {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.logger.line(str);
      return this;
    }
  }, {
    key: "column",
    value: function column() {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.logger.column(str);
      return this;
    }
  }, {
    key: "add",
    value: function add() {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.logger.add(str);
      return this;
    }
  }, {
    key: "reset",
    value: function reset() {
      _option["default"].reset();

      _color["default"].reset();

      return this;
    }
  }, {
    key: "setup",
    value: function setup(options) {
      _option["default"].setup(options);

      return this;
    }
  }, {
    key: "fill",
    value: function fill() {
      _color["default"].fill();

      return this;
    }
  }, {
    key: "colors",
    get: function get() {
      return this.logger.colors;
    }
  }]);

  return Logger;
}();

var _default = new Logger();

exports["default"] = _default;