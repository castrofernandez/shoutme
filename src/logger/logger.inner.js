import * as colors from '../color/color.list';
import ColorManager from '../color/color.manager';
import colorSelection from '../color/color.selection';
import Text from '../line/text';
import Output from '../output/output';

const DEFAULT_COLUMNS = 3;

const DEFAULT_TERMINAL_WIDTH = 80;

const DEFAULT_OPTIONS = {
    columns: DEFAULT_COLUMNS,
    width: DEFAULT_TERMINAL_WIDTH,
};

const getColumnWidth = ({
    width = DEFAULT_TERMINAL_WIDTH,
    columns = DEFAULT_COLUMNS,
} = {}) => Math.floor(width / columns);

const printLine = (line = []) => console.log(line.join(''));

class LoggerInner {
    constructor({
        control = colors.control,
        foreground = colors.foreground,
        background = colors.background,
        options = DEFAULT_OPTIONS,
    } = {}) {
        this.colorManager = new ColorManager({ control, foreground, background });
        colorSelection.setup(this.colorManager);
        this.reset();
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

    reset() {
        colorSelection.reset();
        this.output = new Output(this.options);
        return this;
    }

    log(str = '') {
        this.line(str);
        return this.print();
    }

    print() {
        this.output.lines.forEach((line) => printLine(line, this.options));
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
