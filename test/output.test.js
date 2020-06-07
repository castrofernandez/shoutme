'use strict';

import { expect } from 'chai';
import Output from '../src/output/output';
import Text from '../src/line/text';

describe('Output - empty', () => {
    it('lines', async () => {
        expect(new Output().lines).to.be.deep.equal([[]]);
    });
});

describe('Output - 3 columns', () => {
    const options = { columns: 3 };

    it('addNewLine', async () => {
        const output = new Output(options);

        expect(output.lines).to.be.deep.equal([[]]);

        output.addNewLine(new Text({ value: 'line 1' })).addNewLine(new Text({ value: 'line 2' }));

        expect(output.lines).to.be.deep.equal([
            ['line 1'],
            ['line 2'],
        ]);
    });

    it('addNewColumn', async () => {
        const output = new Output(options);

        output.addNewColumn(new Text({ value: 'column 1' })).addNewColumn(new Text({ value: 'column 2' }));

        expect(output.lines).to.be.deep.equal([
            [ 'column 1', 'column 2' ],
        ]);
    });

    it('appendToColumn', async () => {
        const output = new Output(options);

        output.appendToColumn(new Text({ value: 'a' })).appendToColumn(new Text({ value: 'b' }));

        expect(output.lines).to.be.deep.equal([
            ['ab'],
        ]);
    });
});
