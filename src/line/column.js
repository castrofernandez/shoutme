import Text from './text';

const getColumnRemainder = (width, columnWidth = 0) => Math.max(columnWidth - width, 0);

const fillColumn = (width = 0, columnWidth) => ' '.repeat(getColumnRemainder(width, columnWidth));

const getText = (texts = []) => texts.map(({ text }) => text).join('');

class Column {
    constructor({
        text,
        columnWidth,
    }) {
        this.texts = [...(text ? [text] : [])];
        this.columnWidth = columnWidth;
    }

    append(text = new Text()) {
        this.texts.push(text);
    }

    get text() {
        return `${getText(this.texts)}${this.gap}`;
    }

    get width() {
        return this.texts.reduce((total, { length } = {}) => total + length, 0);
    }

    get gap() {
        return fillColumn(this.width, this.columnWidth);
    }
}

export default Column;
