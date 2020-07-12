"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = function _default() {
  return Math.random().toString(36).substring(2, 13) + Math.random().toString(32).substring(1, 13);
};

exports.default = _default;