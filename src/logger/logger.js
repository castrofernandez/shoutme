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

    back(color = '') {
        colorSelection.back(color);
        return this;
    }

    randomBack() {
        colorSelection.randomBack(color);
        return this;
    }

    nextBackground() {
        colorSelection.nextBackground();
        return this;
    }

    fore(color = '') {
        colorSelection.fore(color);
        return this;
    }

    randomFore() {
        colorSelection.randomFore();
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
