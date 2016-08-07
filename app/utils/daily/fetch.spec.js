/**
 * @seite/desktop
 *
 * Copyright, 2016 André König <andre.koenig@gmail.com>
 * All rights reserved
 *
 */

/*
 * @author André König <andre.koenig@gmail.com>
 *
 */

'use strict';

const fs = require('fs');
const path = require('path');

const co = require('co');
const rimraf = require('rimraf');
const chai = require('chai');

chai.use(require('chai-as-promised'));

const {expect} = chai;

const daily = require('.');
const {fetch} = require('.');

describe('The "daily" fetch function', function () {
	const tmp = path.join(__dirname, '.data');

	beforeEach(done => {
		fs.mkdirSync(tmp);

		fs.writeFileSync(path.join(tmp, '1455235200.md'), 'foobar');

		done();
	});

	afterEach(done =>
		rimraf(tmp, done)
	);

	it('should be able to read a day document', function () {
		const probe = co.wrap(function * () {
			const handler = yield daily({path: tmp});

			const result = yield fetch({handler, day: '1455235200'});

			return result;
		});

		return expect(probe()).to.eventually.equal('foobar');
	});
});
