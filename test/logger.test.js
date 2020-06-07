'use strict';

import { expect } from 'chai';
import { spy, stub, restore } from 'sinon';
import logger from '../src/logger/logger';
import ColorManager from '../src/color/color.manager';

const WIDTH = 80;
const COLUMNS = 3;
const COLUMN_WIDTH = Math.floor(WIDTH / COLUMNS);
const RESET = 'reset';
const FOREGROUND = { white: 'f-white', black: 'f-black' };
const BACKGROUND = { white: 'b-white', black: 'b-black' };

const fillSpaces = ({ length = 0 } = {}) => ' '.repeat(COLUMN_WIDTH - length);

describe('logger - log', () => {
    const TEXT1 = 'line 1';
    const TEXT2 = 'line 2';
    let consoleSpy;

    beforeEach(() => {
        logger.options = { width: WIDTH, columns: COLUMNS };
        consoleSpy = spy(console, 'log');
        stub(logger.logger, 'colorManager').value(new ColorManager({
            control: { reset: RESET },
            foreground: FOREGROUND,
            background: BACKGROUND,
        }));
        logger.logger.reset();
    });

    afterEach(() => {
        logger.restoreOptions();
        consoleSpy.restore();
        restore();
    });

    it('empty', async () => {
        logger.log();
        expect(consoleSpy.calledWith(`${FOREGROUND.white}${RESET}${fillSpaces()}`)).to.be.true;
    });

    it('one line', async () => {
        logger.log(TEXT1);
        expect(consoleSpy.calledWith(`${FOREGROUND.white}${TEXT1}${RESET}${fillSpaces(TEXT1)}`)).to.be.true;
    });

    it('two lines', async () => {
        logger.log(TEXT1).log(TEXT2);
        expect(consoleSpy.calledWith(`${FOREGROUND.white}${TEXT1}${RESET}${fillSpaces(TEXT1)}`)).to.be.true;
        expect(consoleSpy.calledWith(`${FOREGROUND.white}${TEXT2}${RESET}${fillSpaces(TEXT2)}`)).to.be.true;
    });

    describe('fillWithFormat', () => {
        beforeEach(() => {
            logger.options = { fillWithFormat: true };
        });

        afterEach(() => {
            logger.restoreOptions();
        });

        it('empty', async () => {
            logger.log();
            expect(consoleSpy.calledWith(`${FOREGROUND.white}${fillSpaces()}${RESET}`)).to.be.true;
        });

        it('one line', async () => {
            logger.log(TEXT1);
            expect(consoleSpy.calledWith(`${FOREGROUND.white}${TEXT1}${fillSpaces(TEXT1)}${RESET}`)).to.be.true;
        });

        it('two lines', async () => {
            logger.log(TEXT1).log(TEXT2);
            expect(consoleSpy.calledWith(`${FOREGROUND.white}${TEXT1}${fillSpaces(TEXT1)}${RESET}`)).to.be.true;
            expect(consoleSpy.calledWith(`${FOREGROUND.white}${TEXT2}${fillSpaces(TEXT2)}${RESET}`)).to.be.true;
        });
    });
});

