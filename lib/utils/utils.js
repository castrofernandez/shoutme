"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandom = void 0;

var getRandom = function getRandom(n) {
  return Math.floor(Math.random() * n);
};

exports.getRandom = getRandom;