"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

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
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return this.full ? false : this.data.push(str);
    }
  }, {
    key: "append",
    value: function append() {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (this.empty) {
        this.data.push([]);
      }

      this.data[this.data.length - 1] += str;
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
  }]);

  return Line;
}();

var OutputInner = /*#__PURE__*/function () {
  function OutputInner() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, OutputInner);

    this.options = options;
    this.lines = [];
    this.createNewLine();
  }

  _createClass(OutputInner, [{
    key: "createNewLine",
    value: function createNewLine() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.options;
      this.lines.push(new Line(options));
      return this.lastLine;
    }
  }, {
    key: "getLineToAppendLine",
    value: function getLineToAppendLine() {
      return this.lastLine.empty ? this.lastLine : this.createNewLine({
        columns: 1
      });
    }
  }, {
    key: "getLineToAppendColumn",
    value: function getLineToAppendColumn() {
      return this.lastLine.full ? this.createNewLine() : this.lastLine;
    }
  }, {
    key: "addNewLine",
    value: function addNewLine() {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.getLineToAppendLine().append(str);
      return this;
    }
  }, {
    key: "addNewColumn",
    value: function addNewColumn() {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.getLineToAppendColumn().addColumn(str);
      return this;
    }
  }, {
    key: "appendToColumn",
    value: function appendToColumn() {
      var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.getLineToAppendColumn().append(str);
      return this;
    }
  }, {
    key: "lastLine",
    get: function get() {
      return this.lines[this.lines.length - 1];
    }
  }, {
    key: "data",
    get: function get() {
      return this.lines.map(function (line) {
        return line.data;
      });
    }
  }]);

  return OutputInner;
}();

var Output = /*#__PURE__*/function () {
  function Output(options) {
    _classCallCheck(this, Output);

    this.output = new OutputInner(options);
  }

  _createClass(Output, [{
    key: "addNewLine",
    value: function addNewLine(str) {
      this.output.addNewLine(str);
      return this;
    }
  }, {
    key: "addNewColumn",
    value: function addNewColumn(str) {
      this.output.addNewColumn(str);
      return this;
    }
  }, {
    key: "appendToColumn",
    value: function appendToColumn(str) {
      this.output.appendToColumn(str);
      return this;
    }
  }, {
    key: "lines",
    get: function get() {
      return this.output.data;
    }
  }]);

  return Output;
}();

var _default = Output;
exports["default"] = _default;