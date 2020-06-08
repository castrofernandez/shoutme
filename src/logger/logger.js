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

    nextBack() {
        colorSelection.nextBack();
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

    nextFore() {
        colorSelection.nextFore();
        return this;
    }

    log(str = '') {
        this.logger.log(str);
        return this;
    }

    print() {
        this.logger.print();
        return this;
    }

    line(str = '') {
        this.logger.line(str);
        return this;
    }

    column(str = '') {
        this.logger.column(str);
        return this;
    }

    add(str = '') {
        this.logger.add(str);
        return this;
    }

    reset() {
        colorSelection.reset();
        return this;
    }
}

export default new Logger();
