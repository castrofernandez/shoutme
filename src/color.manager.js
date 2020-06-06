const { getRandom } = require('./utils');

const getRandomColorName = (colors) => colors[getRandom(colors.length)];

const getEnum = (list) => list.reduce((total, item) => ({
    ...total,
    [item]: item,
}), {});

const filterNonBlack = (colors) => colors.filter((color) => color !== 'black');

class ColorManager {
    constructor({ control = [], foreground = [], background = [] } = {}) {
        this.control = control;
        this.foreground = foreground;
        this.background = background;
    }

    get reset() {
        return this.control.reset;
    }

    get colors() {
        return getEnum(this.getForegroundList());
    }

    get printableColors() {
        return getEnum(filterNonBlack(Object.keys(this.getForegroundList())));
    }

    getBackgroundList() {
        return Object.keys(this.background);
    }

    getForegroundList() {
        return Object.keys(this.foreground);
    }

    getForeColor(name = '') {
        return this.foreground[name] || '';
    }

    getBackColor(name = '') {
        return this.background[name] || '';
    }

    compensateColor(color) {
        return color === this.colors.black ? this.colors.white : this.colors.black;
    }

    getRandomForeColorName() {
        return getRandomColorName(Object.keys(this.printableColors));
    }

    getRandomBackColorName() {
        return getRandomColorName(Object.keys(this.colors));
    }
}

export default ColorManager;
