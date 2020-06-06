"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('./colors'),
    control = _require.control,
    foreground = _require.foreground,
    background = _require.background,
    colors = _require.colors,
    getRandomForeColorName = _require.getRandomForeColorName,
    getRandomBackColorName = _require.getRandomBackColorName;

var Output = require('./output');

var reset = control.reset;
var BACKGROUND_LIST = Object.keys(background);
var FOREGROUND_LIST = Object.keys(foreground); // const TERMINAL_WIDTH = 80;

var getForeColor = function getForeColor() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return foreground[name] || '';
};

var getBackColor = function getBackColor() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return background[name] || '';
};

var compensateColor = function compensateColor(color) {
  return color === colors.black ? colors.white : colors.black;
};

var getColorByIndex = function getColorByIndex() {
  var colors = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return colors[index % colors.length];
}; // const getColumnWidth = (columns = 1) => Math.floor(TERMINAL_WIDTH / columns);


var printLine = function printLine() {
  var line = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return console.log(line.join(''));
};

var Logger = /*#__PURE__*/function () {
  function Logger() {
    _classCallCheck(this, Logger);

    this.reset();
    this.foreIndex = 0;
    this.backIndex = 0;
    this.options = {
      columns: 3
    };
  }

  _createClass(Logger, [{
    key: "background",
    value: function background() {
      var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.backName = color;
      this.assignBack(color);
      return this;
    }
  }, {
    key: "randomBackground",
    value: function randomBackground() {
      this.backName = getRandomBackColorName();
      this.assignBack(this.backName);
      return this;
    }
  }, {
    key: "nextBackground",
    value: function nextBackground() {
      this.backName = getColorByIndex(BACKGROUND_LIST, this.backIndex);
      this.assignBack(this.backName);
      this.backIndex++;
      return this;
    }
  }, {
    key: "foreground",
    value: function foreground() {
      var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.foreName = color;
      this.assignFore(color);
      return this;
    }
  }, {
    key: "randomForeround",
    value: function randomForeround() {
      this.foreName = getRandomForeColorName();
      this.assignFore(this.foreName);
      return this;
    }
  }, {
    key: "nextForeground",
    value: function nextForeground() {
      this.foreName = getColorByIndex(FOREGROUND_LIST, this.foreIndex);
      this.assignFore(this.foreName);
      this.foreIndex++;
      return this;
    }
  }, {
    key: "assignBack",
    value: function assignBack(color) {
      this.back = getBackColor(color);
    }
  }, {
    key: "assignFore",
    value: function assignFore(color) {
      this.fore = getForeColor(color);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.backName = '';
      this.assignBack(this.backName);
      this.foreName = 'white';
      this.assignFore(this.foreName);
      this.output = new Output();
      return this;
    }
  }, {
    key: "isForeEqualToBack",
    value: function isForeEqualToBack() {
      return this.foreName === this.backName;
    }
  }, {
    key: "compensate",
    value: function compensate() {
      this.fore = this.isForeEqualToBack() ? getForeColor(compensateColor(this.foreName)) : this.fore;
    }
  }, {
    key: "log",
    value: function log() {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.appendLine(str);
      this.output.lines.forEach(function (line) {
        return printLine(line);
      });
      this.reset();
      return this;
    }
  }, {
    key: "formatText",
    value: function formatText() {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.compensate();
      return "".concat(this.back).concat(this.fore).concat(str).concat(reset);
    }
  }, {
    key: "appendLine",
    value: function appendLine() {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.output.addNewLine(this.formatText(str));
      return this;
    }
  }, {
    key: "appendToColumn",
    value: function appendToColumn() {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.output.appendToColumn(this.formatText(str));
      return this;
    }
  }, {
    key: "colors",
    get: function get() {
      return colors;
    }
  }]);

  return Logger;
}();

var _default = new Logger();

exports["default"] = _default;