import * as colors from './colors.list';
import ColorManager from './color.manager';
import Text from './text';

import Output from './output';

const DEFAULT_COLUMNS = 3;

const DEFAULT_TERMINAL_WIDTH = 80;

const FILL_WITH_FORMAT = false;

const DEFAULT_OPTIONS = {
    columns: DEFAULT_COLUMNS,
    width: DEFAULT_TERMINAL_WIDTH,
    fillWithFormat: FILL_WITH_FORMAT,
};

const getColorByIndex = (colors = [], index = 0) => colors[index % colors.length];

const getColumnWidth = ({
    width = DEFAULT_TERMINAL_WIDTH,
    columns = DEFAULT_COLUMNS,
} = {}) => Math.floor(width / columns);

const printLine = (line = [], options) => console.log(line.join(''));

class LoggerInner {
    constructor({
        control = colors.control,
        foreground = colors.foreground,
        background = colors.background,
        options = DEFAULT_OPTIONS,
    } = {}) {
        this.colorManager = new ColorManager({ control, foreground, background });
        this.reset();
        this.foreIndex = 0;
        this.backIndex = 0;
        this.options = { ...options };
        this.columnWidth = getColumnWidth(options);
    }

    get colors() {
        return this.colorManager.colors;
    }

    setOptions(options = {}) {
        this.options = { ...this.options, ...options };
        this.restoreOutputOptions();
    }

    restoreOptions() {
        this.options = { ...DEFAULT_OPTIONS };
        this.restoreOutputOptions();
    }

    restoreOutputOptions() {
        this.output.setOptions(this.options);
    }

    background(color = '') {
        this.backName = color;
        this.assignBack(color);
        return this;
    }

    randomBackground() {
        this.backName = this.colorManager.getRandomBackColorName();
        this.assignBack(this.backName);
        return this;
    }

    nextBackground() {
        this.backName = getColorByIndex(this.colorManager.getBackgroundList(), this.backIndex);
        this.assignBack(this.backName);
        this.backIndex++;
        return this;
    }

    foreground(color = '') {
        this.foreName = color;
        this.assignFore(color);
        return this;
    }

    randomForeround() {
        this.foreName = this.colorManager.getRandomForeColorName();
        this.assignFore(this.foreName);
        return this;
    }

    nextForeground() {
        this.foreName = getColorByIndex(this.colorManager.getForegroundList(), this.foreIndex);
        this.assignFore(this.foreName);
        this.foreIndex++;
        return this;
    }

    assignBack(color) {
        this.back = this.colorManager.getBackColor(color);
    }

    assignFore(color) {
        this.fore = this.colorManager.getForeColor(color);
    }

    reset() {
        this.backName = '';
        this.assignBack(this.backName);
        this.foreName = 'white';
        this.assignFore(this.foreName);
        this.output = new Output(this.options);
        return this;
    }

    isForeEqualToBack() {
        return this.foreName === this.backName;
    }

    compensate() {
        this.fore = this.isForeEqualToBack()
            ? this.colorManager.getForeColor(this.colorManager.compensateColor(this.foreName))
            : this.fore;
    }

    log(str = '') {
        this.appendLine(str);
        this.output.lines.forEach((line) => printLine(line, this.options));
        this.reset();
        return this;
    }

    formatText(str = '') {
        this.compensate();

        return new Text({
            background: this.back,
            foreground: this.fore,
            reset: this.colorManager.reset,
            columnWidth: this.columnWidth,
            fillWithFormat: this.options.fillWithFormat,
            value: str,
        });
    }

    appendLine(str = '') {
        this.output.addNewLine(this.formatText(str));
        return this;
    }

    appendColumn(str = '') {
        this.output.addNewColumn(this.formatText(str));
        return this;
    }

    appendToColumn(str = '') {
        this.output.appendToColumn(this.formatText(str));
        return this;
    }
}

export default LoggerInner;
