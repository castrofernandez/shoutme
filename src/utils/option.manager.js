const DEFAULT_COLUMNS = 3;

const DEFAULT_TERMINAL_WIDTH = 80;

const DEFAULT_OPTIONS = {
    columns: DEFAULT_COLUMNS,
    width: DEFAULT_TERMINAL_WIDTH,
};

class OptionManager {
    constructor(options = {}) {
        this.setup(options);
    }

    reset() {
        this.opts = { ...DEFAULT_OPTIONS };
    }

    setup(options = {}) {
        this.opts = {
            ...DEFAULT_OPTIONS,
            ...options,
        };
    }

    get options() {
        return { ...this.opts };
    }

    get columns() {
        return this.options.columns || DEFAULT_COLUMNS;
    }

    get width() {
        return this.options.width || DEFAULT_TERMINAL_WIDTH;
    }

    get columnWidth() {
        return this.columns > 0 ? this.width / this.columns : 0;
    }
}

export default new OptionManager();
