import Text from './text';

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
        return this.data.map(({ data } = {}) => data);
    }

    addColumn(text = new Text()) {
        return this.full ? false : this.data.push(text);
    }

    append(text = new Text()) {
        return this.empty
            ? this.data.push(text)
            : this.data[this.data.length - 1].append(text);
    }
}

export default Line;
