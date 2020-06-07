#!/usr/bin/env node -r esm

import shoutme from '../src/index';

shoutme.background(shoutme.colors.red).foreground(shoutme.colors.cyan).log('Hi!');
