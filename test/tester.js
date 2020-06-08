#!/usr/bin/env node -r esm

import shoutme from '../src/index';

shoutme.back(shoutme.colors.red).fore(shoutme.colors.cyan).log('Hi!');

shoutme.log();

const NUMBERS = [ 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten' ];

NUMBERS.forEach((number) => shoutme.randomFore().log(number));

shoutme.log();

NUMBERS.forEach((number, index) => shoutme.appendToColumn(`${index + 1}. `).nextBack()
    .fore(shoutme.colors.white).appendToColumn(` ${number} `).print().print());

shoutme.log().nextBack().log('The end');
