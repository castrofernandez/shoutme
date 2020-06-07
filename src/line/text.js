import colorSelection from '../color/color.selection';

const format = ({ value, background, foreground, reset } = {}) => `${background}${foreground}${value}${reset}`;

class Text {
    constructor(value = '') {
        this.values = [{
            value,
            ...colorSelection.selection,
        }];
    }

    get text() {
        return this.values.map((value) => format(value)).join('');
    }

    get length() {
        return this.values.reduce((total, { value }) => total + value.length, 0);
    }

    append({ values = [] } = {}) {
        this.values.push(...values);
    }
}

export default Text;
