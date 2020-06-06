'use strict';

import { expect } from 'chai';
import Line from '../src/line';

describe('line - empty', () => {
    it('empty', async () => {
        expect(new Line().empty).to.be.true;
        expect(new Line().full).to.be.false;
        expect(new Line().columns).to.be.equal(1);
    });
});

describe('line - columns 3', () => {
    const options = { columns: 3 };

    it('empty', async () => {
        expect(new Line(options).empty).to.be.true;
        expect(new Line(options).full).to.be.false;
        expect(new Line(options).columns).to.be.equal(3);
    });

    it('addColumn', async () => {
        const line = new Line(options);

        line.addColumn('a');
        expect(line.empty).to.be.false;
        expect(line.full).to.be.false;

        line.addColumn('b');
        expect(line.empty).to.be.false;
        expect(line.full).to.be.false;

        line.addColumn('c');
        expect(line.empty).to.be.false;
        expect(line.full).to.be.true;

        expect(line.data).to.be.deep.equal([ 'a', 'b', 'c' ]);
    });

    it('append', async () => {
        const line = new Line(options);

        line.append('a');
        expect(line.empty).to.be.false;
        expect(line.full).to.be.false;

        line.append('b');
        expect(line.empty).to.be.false;
        expect(line.full).to.be.false;

        line.append('c');
        expect(line.empty).to.be.false;
        expect(line.full).to.be.false;

        expect(line.data).to.be.deep.equal(['abc']);
    });
});
