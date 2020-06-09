import Text from './text';
import colorSelection from '../color/color.selection';
import optionManager from '../utils/option.manager';

const getColumnRemainder = (width) => Math.max(optionManager.columnWidth - width, 0);

const fillColumn = (width) => ' '.repeat(getColumnRemainder(width));

const getText = (texts = []) => texts.map(({ text }) => text).join('');

const wrapGap = ({ background = '', reset = '', gap = '', fill = false }) => fill
    ? `${background}${gap}${reset}`
    : gap;

class Column {
    constructor({ text, isLastColumn = false }) {
        this.texts = [...(text ? [text] : [])];
        this.isLastColumn = isLastColumn;
        this.colorSelection = { ...colorSelection.selection };
    }

    get text() {
        return `${getText(this.texts)}${this.gap}`;
    }

    get width() {
        return this.texts.reduce((total, { length } = {}) => total + length, 0);
    }

    get gap() {
        return wrapGap({
            gap: fillColumn(this.width),
            ...this.lastText,
        });
    }

    get lastText() {
        const length = this.texts.length;
        return length > 0 ? this.texts[length - 1].last : {};
    }

    append(text = new Text()) {
        this.texts.push(text);
        return this;
    }
}

export default Column;
