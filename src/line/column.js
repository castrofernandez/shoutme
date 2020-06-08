import Text from './text';
import colorSelection from '../color/color.selection';

const getColumnRemainder = (width, columnWidth = 0) => Math.max(columnWidth - width, 0);

const fillColumn = (width = 0, columnWidth) => ' '.repeat(getColumnRemainder(width, columnWidth));

const getText = (texts = []) => texts.map(({ text }) => text).join('');

const getColorSelection = () => colorSelection.selection || {};

const shouldFill = () => getColorSelection().fill;

const wrapGap = ({ background = '', reset = '', gap = '' }) => shouldFill() ? `${background}${gap}${reset}` : gap;

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
        return wrapGap({
            gap: fillColumn(this.width, this.columnWidth),
            ...colorSelection.selection,
        });
    }
}

export default Column;
