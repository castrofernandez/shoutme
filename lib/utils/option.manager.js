"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DEFAULT_COLUMNS = 3;
var DEFAULT_TERMINAL_WIDTH = 80;
var DEFAULT_OPTIONS = {
  columns: DEFAULT_COLUMNS,
  width: DEFAULT_TERMINAL_WIDTH
};

var OptionManager = /*#__PURE__*/function () {
  function OptionManager() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, OptionManager);

    this.setup(options);
  }

  _createClass(OptionManager, [{
    key: "reset",
    value: function reset() {
      this.opts = _objectSpread({}, DEFAULT_OPTIONS);
    }
  }, {
    key: "setup",
    value: function setup() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.opts = _objectSpread(_objectSpread({}, DEFAULT_OPTIONS), options);
    }
  }, {
    key: "options",
    get: function get() {
      return _objectSpread({}, this.opts);
    }
  }, {
    key: "columns",
    get: function get() {
      return this.options.columns || DEFAULT_COLUMNS;
    }
  }, {
    key: "width",
    get: function get() {
      return this.options.width || DEFAULT_TERMINAL_WIDTH;
    }
  }, {
    key: "columnWidth",
    get: function get() {
      return this.columns > 0 ? this.width / this.columns : 0;
    }
  }]);

  return OptionManager;
}();

var _default = new OptionManager();

exports["default"] = _default;