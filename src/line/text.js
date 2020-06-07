class Text {
    constructor(value = '') {
        this.value = value;
    }

    get text() {
        return this.value;
    }

    append({ value = '' } = {}) {
        this.value += value;
    }
}

export default Text;
