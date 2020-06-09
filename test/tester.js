#!/usr/bin/env node -r esm

import shoutme from '../src/index';

shoutme.back(shoutme.colors.red).fore(shoutme.colors.cyan).log('Hi!');

shoutme.log();

const NUMBERS = [ 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten' ];

NUMBERS.forEach((number) => shoutme.randomFore().log(number));

shoutme.log();

const fillGap = (str = '', width = 0) => `${' '.repeat(width - str.length)}${str}`;

NUMBERS.forEach((number, index) => shoutme.fill().add(fillGap(`${index + 1}. `, 4)).nextBack()
    .fore(shoutme.colors.black).add(` ${number} `).nextBack().column('column 2')
    .nextBack().column('column 3').print().print());

shoutme.log().fore(shoutme.colors.black).nextBack().fill().log('The end').log();
