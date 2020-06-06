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

    addColumn(str = '') {
        return this.full ? false : this.data.push(str);
    }

    append(str = '') {
        if (this.empty) {
            this.data.push([]);
        }

        this.data[this.data.length - 1] += str;
    }
}

export default Line;
