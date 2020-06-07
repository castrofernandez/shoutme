import Line from './line';

class OutputInner {
    constructor(options = {}) {
        this.options = options;
        this.lines = [];
        this.createNewLine();
    }

    get lastLine() {
        return this.lines[this.lines.length - 1];
    }

    get data() {
        return this.lines.map((line) => line.data);
    }

    createNewLine() {
        this.lines.push(new Line(this.options));
        return this.lastLine;
    }

    getLineToAppendLine() {
        return this.lastLine.empty ? this.lastLine : this.createNewLine();
    }

    getLineToAppendColumn() {
        return this.lastLine.full ? this.createNewLine() : this.lastLine;
    }

    addNewLine(str = '') {
        this.getLineToAppendLine().append(str);
        return this;
    }

    addNewColumn(str = '') {
        this.getLineToAppendColumn().addColumn(str);
        return this;
    }

    appendToColumn(str = '') {
        this.getLineToAppendColumn().append(str);
        return this;
    }
}

export default OutputInner;
