import LoggerInner from './logger.inner';
import colorSelection from '../color/color.selection';

class Logger {
    constructor() {
        this.logger = new LoggerInner();
    }

    get colors() {
        return this.logger.colors;
    }

    set options(opts = {}) {
        this.logger.setOptions(opts);
    }

    restoreOptions() {
        this.logger.restoreOptions();
    }

    background(color = '') {
        colorSelection.background(color);
        return this;
    }

    randomBackground() {
        colorSelection.randomBackground(color);
        return this;
    }

    nextBackground() {
        colorSelection.nextBackground();
        return this;
    }

    foreground(color = '') {
        colorSelection.foreground(color);
        return this;
    }

    randomForeround() {
        colorSelection.randomForeround();
        return this;
    }

    nextForeground() {
        colorSelection.nextForeground();
        return this;
    }

    log(str = '') {
        this.logger.log(str);
        return this;
    }

    print() {
        return this.logger.print();
    }

    appendLine(str = '') {
        this.logger.appendLine(str);
        return this;
    }

    appendColumn(str = '') {
        this.logger.appendColumn(str);
        return this;
    }

    appendToColumn(str = '') {
        this.logger.appendToColumn(str);
        return this;
    }
}

export default new Logger();
