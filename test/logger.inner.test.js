'use strict';

import { expect } from 'chai';
import { spy } from 'sinon';
import LoggerInner from '../src/logger/logger.inner';
import optionManager from '../src/utils/option.manager';

const mockLogger = () => new LoggerInner({
    control: { reset: '' },
    foreground: { white: '', black: '' },
    background: { white: '', black: '' },
});

const setupOptions = () => optionManager.setup({ width: 1, columns: 3 });

describe('logger - log', () => {
    const logger = mockLogger();
    let consoleSpy;

    beforeEach(() => {
        consoleSpy = spy(console, 'log');
        setupOptions();
    });

    afterEach(() => {
        consoleSpy.restore();
        optionManager.reset();
    });

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

describe('logger - line()', () => {
    const logger = mockLogger();
    let consoleSpy;

    beforeEach(() => {
        consoleSpy = spy(console, 'log');
        setupOptions();
    });

    afterEach(() => {
        consoleSpy.restore();
        optionManager.reset();
    });

    it('empty', async () => {
        logger.line().log();
        expect(consoleSpy.calledWith('')).to.be.true;
    });

    it('one line', async () => {
        logger.line('line 1').log();
        expect(consoleSpy.calledWith('line 1')).to.be.true;
    });

    it('two lines', async () => {
        logger.line('line 1').line('line 2').log();
        expect(consoleSpy.calledWith('line 1')).to.be.true;
        expect(consoleSpy.calledWith('line 2')).to.be.true;
    });
});

describe('logger - add()', () => {
    const logger = mockLogger();
    let consoleSpy;

    beforeEach(() => {
        consoleSpy = spy(console, 'log');
        setupOptions();
    });

    afterEach(() => {
        consoleSpy.restore();
        optionManager.reset();
    });

    it('empty', async () => {
        logger.add().log();
        expect(consoleSpy.calledWith('')).to.be.true;
    });

    it('one line, one column', async () => {
        logger.add('column 1').log();
        expect(consoleSpy.calledWith('column 1')).to.be.true;
    });

    it('one line, two columns', async () => {
        logger.add('column 1').add('column 2').log();
        expect(consoleSpy.calledWith('column 1column 2')).to.be.true;
    });

    it('two lines, two columns', async () => {
        logger.add('column 1')
            .add('column 2')
            .line('column a')
            .add('column b').log();

        expect(consoleSpy.calledWith('column 1column 2')).to.be.true;
        expect(consoleSpy.calledWith('column acolumn b')).to.be.true;
    });

    it('one line, three columns', async () => {
        logger.add('column 1')
            .add('column 2')
            .add('column 3').log();

        expect(consoleSpy.calledWith('column 1column 2column 3')).to.be.true;
    });
});

describe('logger - column()', () => {
    const logger = mockLogger();
    let consoleSpy;

    beforeEach(() => {
        consoleSpy = spy(console, 'log');
        setupOptions();
    });

    afterEach(() => {
        consoleSpy.restore();
        optionManager.reset();
    });

    it('empty', async () => {
        logger.column().log();
        expect(consoleSpy.calledWith('')).to.be.true;
    });

    it('one line, one column', async () => {
        logger.column('column 1').log();
        expect(consoleSpy.calledWith('column 1')).to.be.true;
    });

    it('one line, two columns', async () => {
        logger.column('column 1').column('column 2').log();
        expect(consoleSpy.calledWith('column 1column 2')).to.be.true;
    });

    it('two lines, two columns', async () => {
        logger.column('column 1')
            .column('column 2')
            .line('column a')
            .column('column b').log();

        expect(consoleSpy.calledWith('column 1column 2')).to.be.true;
        expect(consoleSpy.calledWith('column acolumn b')).to.be.true;
    });

    it('one line, three columns', async () => {
        logger.column('column 1')
            .column('column 2')
            .column('column 3').log();

        expect(consoleSpy.calledWith('column 1column 2column 3')).to.be.true;
    });
});
