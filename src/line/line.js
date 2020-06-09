import Column from './column';
import optionManager from '../utils/option.manager';
import Text from './text';

const rangeToFill = (length) => [...Array(Math.max(optionManager.columns - length, 0)).keys()];

const emptyColumn = () => new Column({ text: new Text() });

class Line {
    constructor() {
        this.columns = [];
    }

    get empty() {
        return this.columns.length === 0;
    }

    get full() {
        return this.columns.length === optionManager.columns;
    }

    get length() {
        return this.columns.length;
    }

    get text() {
        return [
            ...this.columns.map(({ text } = {}) => text),
            ...rangeToFill(this.length).map(() => emptyColumn().text),
        ];
    }

    get lastColumn() {
        return this.columns[this.columns.length - 1] || {};
    }

    addColumn(text) {
        return this.full ? false : this.columns.push(new Column({
            text,
            isLastColumn: this.columns.length === optionManager.columns - 1,
        }));
    }

    append(text) {
        return this.empty
            ? this.columns.push(new Column({ text }))
            : this.lastColumn.append(text);
    }
}

export default Line;
