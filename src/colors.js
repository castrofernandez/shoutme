export const { control, foreground, background } = require('./colors.list');

const { getRandom } = require('./utils');

const getEnum = (list) => list.reduce((total, item) => ({
    ...total,
    [item]: item,
}), {});

export const colors = getEnum(Object.keys(foreground));

const filterNonBlack = (colors) => colors.filter((color) => color !== 'black');

export const printableColors = getEnum(filterNonBlack(Object.keys(foreground)));

const getRandomColorName = (colors) => colors[getRandom(colors.length)];

export const getRandomForeColorName = () => getRandomColorName(Object.keys(printableColors));

export const getRandomBackColorName = () => getRandomColorName(Object.keys(colors));
