"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _color = require("./color.list");

var _color2 = _interopRequireDefault(require("./color.manager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var getColorByIndex = function getColorByIndex() {
  var colors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return colors[index % colors.length];
};

var ColorSelection = /*#__PURE__*/function () {
  function ColorSelection() {
    _classCallCheck(this, ColorSelection);

    this.colorManager = new _color2["default"]();
    this.reset();
    this.foreIndex = 0;
    this.backIndex = 0;
  }

  _createClass(ColorSelection, [{
    key: "setup",
    value: function setup() {
      var colorManager = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new _color2["default"]();
      this.colorManager = colorManager;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.backName = '';
      this.foreName = _color.names.white;
      this.filled = false;
    }
  }, {
    key: "fill",
    value: function fill() {
      this.filled = true;
    }
  }, {
    key: "back",
    value: function back() {
      var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.backName = color;
    }
  }, {
    key: "randomBack",
    value: function randomBack() {
      this.backName = this.colorManager.getRandomBackColorName();
    }
  }, {
    key: "nextBack",
    value: function nextBack() {
      this.backName = getColorByIndex(this.colorManager.getBackgroundList(), this.backIndex);
      this.backIndex++;
    }
  }, {
    key: "fore",
    value: function fore() {
      var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.foreName = color;
    }
  }, {
    key: "randomFore",
    value: function randomFore() {
      this.foreName = this.colorManager.getRandomForeColorName();
    }
  }, {
    key: "nextFore",
    value: function nextFore() {
      this.foreName = getColorByIndex(this.colorManager.getForegroundList(), this.foreIndex);
      this.foreIndex++;
    }
  }, {
    key: "isForeEqualToBack",
    value: function isForeEqualToBack() {
      return this.foreName === this.backName;
    }
  }, {
    key: "compensate",
    value: function compensate() {
      this.fore = this.isForeEqualToBack() ? this.colorManager.getForeColor(this.colorManager.compensateColor(this.foreName)) : this.fore;
    }
  }, {
    key: "selection",
    get: function get() {
      return {
        foreground: this.colorManager.getForeColor(this.foreName),
        background: this.colorManager.getBackColor(this.backName),
        reset: this.colorManager.reset,
        fill: this.filled
      };
    }
  }]);

  return ColorSelection;
}();

var _default = new ColorSelection();

exports["default"] = _default;