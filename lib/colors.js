"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandomBackColorName = exports.getRandomForeColorName = exports.printableColors = exports.colors = exports.background = exports.foreground = exports.control = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('./colors.list'),
    control = _require.control,
    foreground = _require.foreground,
    background = _require.background;

exports.background = background;
exports.foreground = foreground;
exports.control = control;

var _require2 = require('./utils'),
    getRandom = _require2.getRandom;

var getEnum = function getEnum(list) {
  return list.reduce(function (total, item) {
    return _objectSpread(_objectSpread({}, total), {}, _defineProperty({}, item, item));
  }, {});
};

var colors = getEnum(Object.keys(foreground));
exports.colors = colors;

var filterNonBlack = function filterNonBlack(colors) {
  return colors.filter(function (color) {
    return color !== 'black';
  });
};

var printableColors = getEnum(filterNonBlack(Object.keys(foreground)));
exports.printableColors = printableColors;

var getRandomColorName = function getRandomColorName(colors) {
  return colors[getRandom(colors.length)];
};

var getRandomForeColorName = function getRandomForeColorName() {
  return getRandomColorName(Object.keys(printableColors));
};

exports.getRandomForeColorName = getRandomForeColorName;

var getRandomBackColorName = function getRandomBackColorName() {
  return getRandomColorName(Object.keys(colors));
};

exports.getRandomBackColorName = getRandomBackColorName;