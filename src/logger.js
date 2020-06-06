import { control, foreground, background, colors, getRandomForeColorName, getRandomBackColorName } from './colors';

import Output from './output';

const { reset } = control;

const BACKGROUND_LIST = Object.keys(background);

const FOREGROUND_LIST = Object.keys(foreground);

// const TERMINAL_WIDTH = 80;

const getForeColor = (name = '') => foreground[name] || '';

const getBackColor = (name = '') => background[name] || '';

const compensateColor = (color) => (color === colors.black ? colors.white : colors.black);

const getColorByIndex = (colors = [], index = 0) => colors[index % colors.length];

// const getColumnWidth = (columns = 1) => Math.floor(TERMINAL_WIDTH / columns);

const printLine = (line = []) => console.log(line.join(''));

class Logger {
    constructor() {
        this.reset();
        this.foreIndex = 0;
        this.backIndex = 0;
        this.options = { columns: 3 };
    }

    get colors() {
        return colors;
    }

    background(color = '') {
        this.backName = color;
        this.assignBack(color);
        return this;
    }

    randomBackground() {
        this.backName = getRandomBackColorName();
        this.assignBack(this.backName);
        return this;
    }

    nextBackground() {
        this.backName = getColorByIndex(BACKGROUND_LIST, this.backIndex);
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
        this.foreName = getRandomForeColorName();
        this.assignFore(this.foreName);
        return this;
    }

    nextForeground() {
        this.foreName = getColorByIndex(FOREGROUND_LIST, this.foreIndex);
        this.assignFore(this.foreName);
        this.foreIndex++;
        return this;
    }

    assignBack(color) {
        this.back = getBackColor(color);
    }

    assignFore(color) {
        this.fore = getForeColor(color);
    }

    reset() {
        this.backName = '';
        this.assignBack(this.backName);
        this.foreName = 'white';
        this.assignFore(this.foreName);
        this.output = new Output();
        return this;
    }

    isForeEqualToBack() {
        return this.foreName === this.backName;
    }

    compensate() {
        this.fore = this.isForeEqualToBack() ? getForeColor(compensateColor(this.foreName)) : this.fore;
    }

    log(str = '') {
        this.appendLine(str);
        this.output.lines.forEach((line) => printLine(line));
        this.reset();
        return this;
    }

    formatText(str = '') {
        this.compensate();
        return `${this.back}${this.fore}${str}${reset}`;
    }

    appendLine(str = '') {
        this.output.addNewLine(this.formatText(str));
        return this;
    }

    appendToColumn(str = '') {
        this.output.appendToColumn(this.formatText(str));
        return this;
    }
}

export default new Logger();
