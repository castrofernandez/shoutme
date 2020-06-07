'use strict';

import { expect } from 'chai';
import { spy } from 'sinon';
import LoggerInner from '../src/logger.inner';

const WIDTH = 80;
const COLUMNS = 3;
const COLUMN_WIDTH = Math.floor(WIDTH / COLUMNS);

const fillSpaces = (length = 0) => ' '.repeat(COLUMN_WIDTH - length);

const fillColumn = (str = '') => `${str}${fillSpaces(str.length)}`;

const mockLogger = () => new LoggerInner({
    control: { reset: '' },
    foreground: { white: '', black: '' },
    background: { white: '', black: '' },
    options: { width: WIDTH, columns: COLUMNS },
});

describe('logger - log (columns)', () => {
    const logger = mockLogger();
    let consoleSpy;

    beforeEach(() => {
        consoleSpy = spy(console, 'log');
    });

    afterEach(() => consoleSpy.restore());

    it('empty', async () => {
        logger.log();
        expect(consoleSpy.calledWith(fillColumn(''))).to.be.true;
    });

    it('one column', async () => {
        logger.appendColumn('column 1').log();
        expect(consoleSpy.calledWith(fillColumn('column 1'))).to.be.true;
    });

    it('two columns', async () => {
        logger.appendColumn('column 1').appendColumn('column 2').log();
        expect(consoleSpy.calledWith(fillColumn('column 1') + fillColumn('column 2'))).to.be.true;
    });
});
