import Text from './text';

class Column {
    constructor(text) {
        this.texts = [...(text ? [text] : [])];
    }

    append(text = new Text()) {
        this.texts.push(text);
    }

    get text() {
        return this.texts.map(({ text }) => text).join('');
    }
}

export default Column;
