'use strict';

import { expect } from 'chai';
import Output from '../src/output/output';
import Text from '../src/line/text';
import optionManager from '../src/utils/option.manager';
import colorSelection from '../src/color/color.selection';
import ColorManager from '../src/color/color.manager';

const setup = () => {
    optionManager.setup({ width: 1, columns: 3 });
    colorSelection.setup(new ColorManager({
        control: { reset: '' },
        foreground: { black: '', white: '' },
        background: { black: '', white: '' },
    }));
};

const reset = () => {
    optionManager.reset();
    colorSelection.reset();
};

describe('Output - empty', () => {
    beforeEach(setup);

    afterEach(reset);

    it('lines', async () => {
        optionManager.setup({ width: 1, columns: 1 });
        expect(new Output().lines).to.be.deep.equal([[' ']]);
    });
});

describe('Output - 3 columns', () => {
    beforeEach(setup);

    afterEach(reset);

    it('addNewLine', async () => {
        const output = new Output();

        expect(output.lines).to.be.deep.equal([[ '', '', '' ]]);

        output.addNewLine(new Text('line 1')).addNewLine(new Text('line 2'));

        expect(output.lines).to.be.deep.equal([
            [ 'line 1', '', '' ],
            [ 'line 2', '', '' ],
        ]);
    });

    it('addNewColumn', async () => {
        const output = new Output();

        output.addNewColumn(new Text('column 1')).addNewColumn(new Text('column 2'));

        expect(output.lines).to.be.deep.equal([
            [ 'column 1', 'column 2', '' ],
        ]);
    });

    it('appendToColumn', async () => {
        const output = new Output();

        output.appendToColumn(new Text('a')).appendToColumn(new Text('b'));

        expect(output.lines).to.be.deep.equal([
            [ 'ab', '', '' ],
        ]);
    });
});
