import OutputInner from './output.inner';

class Output {
    constructor() {
        this.output = new OutputInner();
    }

    get lines() {
        return this.output.text;
    }

    addNewLine(text) {
        this.output.addNewLine(text);
        return this;
    }

    addNewColumn(text) {
        this.output.addNewColumn(text);
        return this;
    }

    appendToColumn(text) {
        this.output.appendToColumn(text);
        return this;
    }
}

export default Output;
