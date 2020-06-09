import Line from '../line/line';
import Text from '../line/text';

class OutputInner {
    constructor() {
        this.lines = [];
        this.createNewLine();
    }

    get lastLine() {
        return this.lines[this.lines.length - 1];
    }

    get text() {
        return this.lines.map(({ text }) => text);
    }

    createNewLine() {
        this.lines.push(new Line());
        return this.lastLine;
    }

    getLineToAppendLine() {
        return this.lastLine.empty ? this.lastLine : this.createNewLine();
    }

    getLineToAppendColumn() {
        return this.lastLine.full ? this.createNewLine() : this.lastLine;
    }

    addNewLine(text = new Text()) {
        const line = this.getLineToAppendLine();
        line.append(text);
        return this;
    }

    addNewColumn(text = new Text()) {
        this.getLineToAppendColumn().addColumn(text);
        return this;
    }

    appendToColumn(text = new Text()) {
        this.getLineToAppendColumn().append(text);
        return this;
    }
}

export default OutputInner;
