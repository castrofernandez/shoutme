"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('../utils/utils'),
    getRandom = _require.getRandom;

var getRandomColorName = function getRandomColorName(colors) {
  return colors[getRandom(colors.length)];
};

var getEnum = function getEnum(list) {
  return list.reduce(function (total, item) {
    return _objectSpread(_objectSpread({}, total), {}, _defineProperty({}, item, item));
  }, {});
};

var filterNonBlack = function filterNonBlack(colors) {
  return colors.filter(function (color) {
    return color !== 'black';
  });
};

var ColorManager = /*#__PURE__*/function () {
  function ColorManager() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$control = _ref.control,
        control = _ref$control === void 0 ? {} : _ref$control,
        _ref$foreground = _ref.foreground,
        foreground = _ref$foreground === void 0 ? {} : _ref$foreground,
        _ref$background = _ref.background,
        background = _ref$background === void 0 ? {} : _ref$background;

    _classCallCheck(this, ColorManager);

    this.control = control;
    this.foreground = foreground;
    this.background = background;
  }

  _createClass(ColorManager, [{
    key: "getBackgroundList",
    value: function getBackgroundList() {
      return Object.keys(this.background);
    }
  }, {
    key: "getForegroundList",
    value: function getForegroundList() {
      return Object.keys(this.foreground);
    }
  }, {
    key: "getForeColor",
    value: function getForeColor() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return this.foreground[name] || '';
    }
  }, {
    key: "getBackColor",
    value: function getBackColor() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return this.background[name] || '';
    }
  }, {
    key: "compensateColor",
    value: function compensateColor(color) {
      return color === this.colors.black ? this.colors.white : this.colors.black;
    }
  }, {
    key: "getRandomForeColorName",
    value: function getRandomForeColorName() {
      return getRandomColorName(Object.keys(this.printableColors));
    }
  }, {
    key: "getRandomBackColorName",
    value: function getRandomBackColorName() {
      return getRandomColorName(Object.keys(this.colors));
    }
  }, {
    key: "reset",
    get: function get() {
      return this.control.reset || '';
    }
  }, {
    key: "colors",
    get: function get() {
      return getEnum(this.getForegroundList());
    }
  }, {
    key: "printableColors",
    get: function get() {
      return getEnum(filterNonBlack(this.getForegroundList()));
    }
  }]);

  return ColorManager;
}();

var _default = ColorManager;
exports["default"] = _default;