import LoggerInner from './logger.inner';

class Logger {
    constructor() {
        this.logger = new LoggerInner();
    }

    get colors() {
        return this.logger.color;
    }

    set options(opts = {}) {
        this.logger.setOptions(opts);
    }

    restoreOptions() {
        this.logger.restoreOptions();
    }

    background(color = '') {
        this.logger.background(color);
        return this;
    }

    randomBackground() {
        this.logger.randomBackground(color);
        return this;
    }

    nextBackground() {
        this.logger.nextBackground();
        return this;
    }

    foreground(color = '') {
        this.logger.foreground(color);
        return this;
    }

    randomForeround() {
        this.logger.randomForeround();
        return this;
    }

    nextForeground() {
        this.logger.nextForeground();
        return this;
    }

    log(str = '') {
        this.logger.log(str);
        return this;
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
