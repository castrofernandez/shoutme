import OutputInner from './output.inner';

class Output {
    constructor(options) {
        this.output = new OutputInner(options);
    }

    get lines() {
        return this.output.data;
    }

    addNewLine(str) {
        this.output.addNewLine(str);
        return this;
    }

    addNewColumn(str) {
        this.output.addNewColumn(str);
        return this;
    }

    appendToColumn(str) {
        this.output.appendToColumn(str);
        return this;
    }
}

export default Output;
