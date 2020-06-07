'use strict';

import { expect } from 'chai';
import { spy } from 'sinon';
import LoggerInner from '../src/logger/logger.inner';

const mockLogger = () => new LoggerInner({
    control: { reset: '' },
    foreground: { white: '', black: '' },
    background: { white: '', black: '' },
    options: { width: 0, columns: 3 },
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

describe('logger - appendToColumn', () => {
    const logger = mockLogger();
    let consoleSpy;

    beforeEach(() => {
        consoleSpy = spy(console, 'log');
    });

    afterEach(() => consoleSpy.restore());

    it('empty', async () => {
        logger.appendToColumn().log();
        expect(consoleSpy.calledWith('')).to.be.true;
    });

    it('one line, one column', async () => {
        logger.appendToColumn('column 1').log();
        expect(consoleSpy.calledWith('column 1')).to.be.true;
    });

    it('one line, two columns', async () => {
        logger.appendToColumn('column 1').appendToColumn('column 2').log();
        expect(consoleSpy.calledWith('column 1column 2')).to.be.true;
    });

    it('two lines, two columns', async () => {
        logger.appendToColumn('column 1')
            .appendToColumn('column 2')
            .appendLine('column a')
            .appendToColumn('column b').log();

        expect(consoleSpy.calledWith('column 1column 2')).to.be.true;
        expect(consoleSpy.calledWith('column acolumn b')).to.be.true;
    });

    it('one line, three columns', async () => {
        logger.appendToColumn('column 1')
            .appendToColumn('column 2')
            .appendToColumn('column 3').log();

        expect(consoleSpy.calledWith('column 1column 2column 3')).to.be.true;
    });
});

describe('logger - appendColumn', () => {
    const logger = mockLogger();
    let consoleSpy;

    beforeEach(() => {
        consoleSpy = spy(console, 'log');
    });

    afterEach(() => consoleSpy.restore());

    it('empty', async () => {
        logger.appendColumn().log();
        expect(consoleSpy.calledWith('')).to.be.true;
    });

    it('one line, one column', async () => {
        logger.appendColumn('column 1').log();
        expect(consoleSpy.calledWith('column 1')).to.be.true;
    });

    it('one line, two columns', async () => {
        logger.appendColumn('column 1').appendColumn('column 2').log();
        expect(consoleSpy.calledWith('column 1column 2')).to.be.true;
    });

    it('two lines, two columns', async () => {
        logger.appendColumn('column 1')
            .appendColumn('column 2')
            .appendLine('column a')
            .appendColumn('column b').log();

        expect(consoleSpy.calledWith('column 1column 2')).to.be.true;
        expect(consoleSpy.calledWith('column acolumn b')).to.be.true;
    });

    it('one line, three columns', async () => {
        logger.appendColumn('column 1')
            .appendColumn('column 2')
            .appendColumn('column 3').log();

        expect(consoleSpy.calledWith('column 1column 2column 3')).to.be.true;
    });
});
