#!/usr/bin/env node -r esm

import shoutme from '../src/index';

shoutme.background(shoutme.colors.red).foreground(shoutme.colors.cyan).log('Hi!');

shoutme.log();

const NUMBERS = [ 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten' ];

NUMBERS.forEach((number) => shoutme.randomForeround().log(number));

shoutme.log();

NUMBERS.forEach((number, index) => shoutme.appendToColumn(`${index + 1}. `).nextBackground()
    .foreground(shoutme.colors.white).appendToColumn(` ${number}`).print().print());
