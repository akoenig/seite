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
const {days} = require('.');

describe('The "daily" days function', function () {
	const tmp = path.join(__dirname, '.data');

	const files = ['1470566387', '1455235200'];

	beforeEach(done => {
		fs.mkdirSync(tmp);

		// Touch test files
		files.forEach(file =>
			fs.closeSync(fs.openSync(path.join(tmp, `${file}.md`), 'w'))
		);

		done();
	});

	afterEach(done =>
		rimraf(tmp, done)
	);

	it('should be able to create an index with all available days', function () {
		const probe = co.wrap(function * () {
			const handler = yield daily({path: tmp});
			const result = yield days({handler});

			return result;
		});

		return expect(probe()).to.eventually.eql(['1470566387', '1455235200']);
	});
});
