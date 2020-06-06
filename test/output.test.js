'use strict';

import { expect } from 'chai';
import Output from '../src/output';

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

        output.addNewLine('line 1').addNewLine('line 2');

        expect(output.lines).to.be.deep.equal([
            ['line 1'],
            ['line 2'],
        ]);
    });

    it('addNewColumn', async () => {
        const output = new Output(options);

        output.addNewColumn('column 1').addNewColumn('column 2');

        expect(output.lines).to.be.deep.equal([
            [ 'column 1', 'column 2' ],
        ]);
    });

    it('appendToColumn', async () => {
        const output = new Output(options);

        output.appendToColumn('a').appendToColumn('b');

        expect(output.lines).to.be.deep.equal([
            ['ab'],
        ]);
    });
});