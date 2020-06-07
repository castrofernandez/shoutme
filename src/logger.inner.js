import * as colors from './colors.list';
import ColorManager from './color.manager';

import Output from './output';

// const TERMINAL_WIDTH = 80;

const getColorByIndex = (colors = [], index = 0) => colors[index % colors.length];

// const getColumnWidth = (columns = 1) => Math.floor(TERMINAL_WIDTH / columns);

const printLine = (line = []) => console.log(line.join(''));

class LoggerInner {
    constructor({
        control = colors.control,
        foreground = colors.foreground,
        background = colors.background,
        options = { columns: 3 },
    } = {}) {
        this.colorManager = new ColorManager({ control, foreground, background });
        this.reset();
        this.foreIndex = 0;
        this.backIndex = 0;
        this.options = options;
    }

    get colors() {
        return this.colorManager.colors;
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
        this.output.lines.forEach((line) => printLine(line));
        this.reset();
        return this;
    }

    formatText(str = '') {
        this.compensate();
        return `${this.back}${this.fore}${str}${this.colorManager.reset}`;
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
