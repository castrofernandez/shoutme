import OutputInner from './output.inner';

class Output {
    constructor(options) {
        this.output = new OutputInner(options);
    }

    get lines() {
        return this.output.text;
    }

    setOptions(options) {
        return this.output.setOptions(options);
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
