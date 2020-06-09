'use strict';

import { expect } from 'chai';
import { spy } from 'sinon';
import LoggerInner from '../src/logger/logger.inner';
import ColorManager from '../src/color/color.manager';
import colorSelection from '../src/color/color.selection';
import optionManager from '../src/utils/option.manager';

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

        colorSelection.setup(new ColorManager({
            control: { reset: '' },
            foreground: { white: '', black: '' },
            background: { white: '', black: '' },
        }));

        optionManager.setup({ width: 80, columns: 3 });
    });

    afterEach(() => {
        consoleSpy.restore();
        optionManager.reset();
    });

    it('empty', async () => {
        logger.log();
        expect(consoleSpy.calledWith(fillColumn() + fillColumn() + fillColumn())).to.be.true;
    });

    it('one column', async () => {
        logger.column('column 1').log();
        expect(consoleSpy.calledWith(fillColumn('column 1') + fillColumn() + fillColumn())).to.be.true;
    });

    it('two columns', async () => {
        logger.column('column 1').column('column 2').log();
        expect(consoleSpy.calledWith(fillColumn('column 1') + fillColumn('column 2') + fillColumn())).to.be.true;
    });
});
