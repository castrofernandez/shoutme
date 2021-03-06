import { names } from './color.list';
import ColorManager from './color.manager';

const getColorByIndex = (colors = [], index = 0) => colors[index % colors.length];

class ColorSelection {
    constructor() {
        this.colorManager = new ColorManager();
        this.reset();
        this.foreIndex = 0;
        this.backIndex = 0;
    }

    get selection() {
        return {
            foreground: this.colorManager.getForeColor(this.foreName),
            background: this.colorManager.getBackColor(this.backName),
            reset: this.colorManager.reset,
            fill: this.filled,
        };
    }

    setup(colorManager = new ColorManager()) {
        this.colorManager = colorManager;
    }

    reset() {
        this.backName = '';
        this.foreName = names.white;
        this.filled = false;
    }

    fill() {
        this.filled = true;
    }

    back(color = '') {
        this.backName = color;
    }

    randomBack() {
        this.backName = this.colorManager.getRandomBackColorName();
    }

    nextBack() {
        this.backName = getColorByIndex(this.colorManager.getBackgroundList(), this.backIndex);
        this.backIndex++;
    }

    fore(color = '') {
        this.foreName = color;
    }

    randomFore() {
        this.foreName = this.colorManager.getRandomForeColorName();
    }

    nextFore() {
        this.foreName = getColorByIndex(this.colorManager.getForegroundList(), this.foreIndex);
        this.foreIndex++;
    }

    isForeEqualToBack() {
        return this.foreName === this.backName;
    }

    compensate() {
        this.fore = this.isForeEqualToBack()
            ? this.colorManager.getForeColor(this.colorManager.compensateColor(this.foreName))
            : this.fore;
    }
}

export default new ColorSelection();
