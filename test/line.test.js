'use strict';

import { expect } from 'chai';
import Line from '../src/line/line';
import Text from '../src/line/text';
import ColorManager from '../src/color/color.manager';
import colorSelection from '../src/color/color.selection';

describe('line - empty', () => {
    it('empty', async () => {
        expect(new Line().empty).to.be.true;
        expect(new Line().full).to.be.false;
        expect(new Line().columns).to.be.equal(1);
    });
});

describe('line - columns 3', () => {
    const options = { columns: 3 };

    beforeEach(() => {
        colorSelection.setup(new ColorManager({
            control: { reset: '' },
            foreground: { black: '', white: '' },
            background: { black: '', white: '' },
        }));
    });

    it('empty', async () => {
        expect(new Line(options).empty).to.be.true;
        expect(new Line(options).full).to.be.false;
        expect(new Line(options).columns).to.be.equal(3);
    });

    it('addColumn', async () => {
        const line = new Line(options);

        line.addColumn(new Text('a'));
        expect(line.empty).to.be.false;
        expect(line.full).to.be.false;

        line.addColumn(new Text('b'));
        expect(line.empty).to.be.false;
        expect(line.full).to.be.false;

        line.addColumn(new Text('c'));
        expect(line.empty).to.be.false;
        expect(line.full).to.be.true;

        expect(line.text).to.be.deep.equal([ 'a', 'b', 'c' ]);
    });

    it('append', async () => {
        const line = new Line(options);

        line.append(new Text('a'));
        expect(line.empty).to.be.false;
        expect(line.full).to.be.false;

        line.append(new Text('b'));
        expect(line.empty).to.be.false;
        expect(line.full).to.be.false;

        line.append(new Text('c'));
        expect(line.empty).to.be.false;
        expect(line.full).to.be.false;

        expect(line.text).to.be.deep.equal(['abc']);
    });
});
