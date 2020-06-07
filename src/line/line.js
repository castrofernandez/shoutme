import Column from './column';

class Line {
    constructor({ columns = 1, width = 0 } = {}) {
        this.options = { columns, width };
        this.columnWidth = columns > 0 ? Math.floor(width / columns) : 0;
        this.data = [];
    }

    get empty() {
        return this.data.length === 0;
    }

    get columns() {
        return this.options.columns;
    }

    get full() {
        return this.data.length === this.columns;
    }

    get text() {
        return this.data.map(({ text } = {}) => text);
    }

    addColumn(text) {
        return this.full ? false : this.data.push(new Column({ text, columnWidth: this.columnWidth }));
    }

    append(text) {
        return this.empty
            ? this.data.push(new Column({ text, columnWidth: this.columnWidth }))
            : this.data[this.data.length - 1].append(text);
    }
}

export default Line;
