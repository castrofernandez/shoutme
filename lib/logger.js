"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _logger = _interopRequireDefault(require("./logger.inner"));

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
    key: "restoreOptions",
    value: function restoreOptions() {
      this.logger.restoreOptions();
    }
  }, {
    key: "background",
    value: function background() {
      var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.logger.background(color);
      return this;
    }
  }, {
    key: "randomBackground",
    value: function randomBackground() {
      this.logger.randomBackground(color);
      return this;
    }
  }, {
    key: "nextBackground",
    value: function nextBackground() {
      this.logger.nextBackground();
      return this;
    }
  }, {
    key: "foreground",
    value: function foreground() {
      var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.logger.foreground(color);
      return this;
    }
  }, {
    key: "randomForeround",
    value: function randomForeround() {
      this.logger.randomForeround();
      return this;
    }
  }, {
    key: "nextForeground",
    value: function nextForeground() {
      this.logger.nextForeground();
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
    key: "appendLine",
    value: function appendLine() {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.logger.appendLine(str);
      return this;
    }
  }, {
    key: "appendColumn",
    value: function appendColumn() {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.logger.appendColumn(str);
      return this;
    }
  }, {
    key: "appendToColumn",
    value: function appendToColumn() {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.logger.appendToColumn(str);
      return this;
    }
  }, {
    key: "colors",
    get: function get() {
      return this.logger.colors;
    }
  }, {
    key: "options",
    set: function set() {
      var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.logger.setOptions(opts);
    }
  }]);

  return Logger;
}();

var _default = new Logger();

exports["default"] = _default;