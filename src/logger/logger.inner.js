import * as colors from '../color/color.list';
import ColorManager from '../color/color.manager';
import colorSelection from '../color/color.selection';
import optionManager from '../utils/option.manager';
import Text from '../line/text';
import Output from '../output/output';

const printLine = (line = []) => console.log(line.join(''));

class LoggerInner {
    constructor({
        control = colors.control,
        foreground = colors.foreground,
        background = colors.background,
    } = {}) {
        this.colorManager = new ColorManager({ control, foreground, background });
        colorSelection.setup(this.colorManager);
        this.reset();
    }

    get colors() {
        return this.colorManager.colors;
    }

    reset() {
        colorSelection.reset();
        this.output = new Output();
        return this;
    }

    log(str = '') {
        this.line(str);
        return this.print();
    }

    print() {
        this.output.lines.forEach((line) => printLine(line, optionManager.options));
        this.reset();
        return this;
    }

    formatText(str = '') {
        return new Text(str);
    }

    line(str = '') {
        this.output.addNewLine(this.formatText(str));
        return this;
    }

    column(str = '') {
        this.output.addNewColumn(this.formatText(str));
        return this;
    }

    add(str = '') {
        this.output.appendToColumn(this.formatText(str));
        return this;
    }
}

export default LoggerInner;
