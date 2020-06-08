#!/usr/bin/env node -r esm

import shoutme from '../src/index';

shoutme.background(shoutme.colors.red).fore(shoutme.colors.cyan).log('Hi!');

shoutme.log();

const NUMBERS = [ 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten' ];

NUMBERS.forEach((number) => shoutme.randomForeround().log(number));

shoutme.log();

NUMBERS.forEach((number, index) => shoutme.appendToColumn(`${index + 1}. `).nextBackground()
    .fore(shoutme.colors.white).appendToColumn(` ${number} `).print().print());

shoutme.log().nextBackground().log('The end');
