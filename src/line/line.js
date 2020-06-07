import Column from './column';

class Line {
    constructor({ columns = 1 } = {}) {
        this.options = { columns };
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
        return this.full ? false : this.data.push(new Column(text));
    }

    append(text) {
        return this.empty
            ? this.data.push(new Column(text))
            : this.data[this.data.length - 1].append(text);
    }
}

export default Line;
