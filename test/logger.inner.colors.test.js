'use strict';

import { expect } from 'chai';
import { spy } from 'sinon';
import LoggerInner from '../src/logger.inner';

const FORE_COLORS = {
    black: 'f-black',
    red: 'f-red',
    green: 'f-green',
    yellow: 'f-yellow',
    blue: 'f-blue',
    magenta: 'f-magenta',
    cyan: 'f-cyan',
    white: 'f-white',
};

const BACK_COLORS = {
    black: 'b-black',
    red: 'b-red',
    green: 'b-green',
    yellow: 'b-yellow',
    blue: 'b-blue',
    magenta: 'b-magenta',
    cyan: 'b-cyan',
    white: 'b-white',
};

const RESET = 'reset';

const mockLogger = () => new LoggerInner({
    control: { reset: RESET },
    foreground: FORE_COLORS,
    background: BACK_COLORS,
    options: { width: 0 },
});

describe('logger - log (colors)', () => {
    const logger = mockLogger();
    let consoleSpy;

    beforeEach(() => {
        consoleSpy = spy(console, 'log');
    });

    afterEach(() => consoleSpy.restore());

    it('empty', async () => {
        logger.log();
        expect(consoleSpy.calledWith(`${FORE_COLORS.white}${RESET}`)).to.be.true;
    });

    it('one line with default colors', async () => {
        logger.log('line 1');
        expect(consoleSpy.calledWith(`${FORE_COLORS.white}line 1${RESET}`)).to.be.true;
    });

    it('one line with blue background', async () => {
        logger.background(logger.colors.blue).log('line 1 - blue');
        expect(consoleSpy.calledWith(`${BACK_COLORS.blue}${FORE_COLORS.white}line 1 - blue${RESET}`)).to.be.true;
    });

    it('one line with red background', async () => {
        logger.foreground(logger.colors.red).log('line 1 - red');
        expect(consoleSpy.calledWith(`${FORE_COLORS.red}line 1 - red${RESET}`)).to.be.true;
    });

    it('one line with blue background and red foreground', async () => {
        logger.foreground(logger.colors.red).background(logger.colors.blue).log('line 1 - blue/red');
        expect(consoleSpy.calledWith(`${BACK_COLORS.blue}${FORE_COLORS.red}line 1 - blue/red${RESET}`)).to.be.true;
    });

    it('two lines, first with colors, second default', async () => {
        logger.foreground(logger.colors.red).background(logger.colors.blue).log('line 1 - blue/red');
        logger.log('line 2 - default');
        expect(consoleSpy.calledWith(`${BACK_COLORS.blue}${FORE_COLORS.red}line 1 - blue/red${RESET}`)).to.be.true;
        expect(consoleSpy.calledWith(`${FORE_COLORS.white}line 2 - default${RESET}`)).to.be.true;
    });
});
