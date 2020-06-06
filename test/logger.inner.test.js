'use strict';

import { expect } from 'chai';
import { spy } from 'sinon';
import LoggerInner from '../src/logger.inner';

const mockLogger = () => new LoggerInner({
    control: { reset: '' },
    foreground: { white: '', black: '' },
    background: { white: '', black: '' },
});

describe('logger - log', () => {
    const logger = mockLogger();
    let consoleSpy;

    beforeEach(() => {
        consoleSpy = spy(console, 'log');
    });

    afterEach(() => consoleSpy.restore());

    it('empty', async () => {
        logger.log();
        expect(consoleSpy.calledWith('')).to.be.true;
    });

    it('one line', async () => {
        logger.log('line 1');
        expect(consoleSpy.calledWith('line 1')).to.be.true;
    });

    it('two lines', async () => {
        logger.log('line 1').log('line 2');
        expect(consoleSpy.calledWith('line 1')).to.be.true;
        expect(consoleSpy.calledWith('line 2')).to.be.true;
    });
});

describe('logger - appendLine', () => {
    const logger = mockLogger();
    let consoleSpy;

    beforeEach(() => {
        consoleSpy = spy(console, 'log');
    });

    afterEach(() => consoleSpy.restore());

    it('empty', async () => {
        logger.appendLine().log();
        expect(consoleSpy.calledWith('')).to.be.true;
    });

    it('one line', async () => {
        logger.appendLine('line 1').log();
        expect(consoleSpy.calledWith('line 1')).to.be.true;
    });

    it('two lines', async () => {
        logger.appendLine('line 1').appendLine('line 2').log();
        expect(consoleSpy.calledWith('line 1')).to.be.true;
        expect(consoleSpy.calledWith('line 2')).to.be.true;
    });
});
