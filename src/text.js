const getColumnRemainder = (length, width = 0) => Math.max(width - length, 0);

const fillColumn = ({ length = 0 } = {}, width) => ' '.repeat(getColumnRemainder(length, width));

const getFilledText = ({
    value,
    reset,
    gap,
    fillWithFormat,
}) => fillWithFormat ? `${value}${gap}${reset}` : `${value}${reset}${gap}`;

class Text {
    constructor({
        background = '',
        foreground = '',
        reset = '',
        value = '',
        columnWidth,
        fillWithFormat = false,
    } = {}) {
        this.background = background;
        this.foreground = foreground;
        this.reset = reset;
        this.value = value;
        this.columnWidth = columnWidth;
        this.fillWithFormat = fillWithFormat;
    }

    get gap() {
        return fillColumn(this.value, this.columnWidth);
    }

    get text() {
        return `${this.background}${this.foreground}${getFilledText({
            value: this.value,
            reset: this.reset,
            gap: this.gap,
            fillWithFormat: this.fillWithFormat,
        })}`;
    }

    append({ value = '' } = {}) {
        this.value += value;
    }
}

export default Text;
