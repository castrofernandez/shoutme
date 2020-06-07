'use strict';

import { expect } from 'chai';
import Line from '../src/line';
import Text from '../src/text';

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

        line.addColumn(new Text({ value: 'a' }));
        expect(line.empty).to.be.false;
        expect(line.full).to.be.false;

        line.addColumn(new Text({ value: 'b' }));
        expect(line.empty).to.be.false;
        expect(line.full).to.be.false;

        line.addColumn(new Text({ value: 'c' }));
        expect(line.empty).to.be.false;
        expect(line.full).to.be.true;

        expect(line.text).to.be.deep.equal([ 'a', 'b', 'c' ]);
    });

    it('append', async () => {
        const line = new Line(options);

        line.append(new Text({ value: 'a' }));
        expect(line.empty).to.be.false;
        expect(line.full).to.be.false;

        line.append(new Text({ value: 'b' }));
        expect(line.empty).to.be.false;
        expect(line.full).to.be.false;

        line.append(new Text({ value: 'c' }));
        expect(line.empty).to.be.false;
        expect(line.full).to.be.false;

        expect(line.text).to.be.deep.equal(['abc']);
    });
});
