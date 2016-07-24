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

const path = require('path');

const co = require('co');
const fs = require('co-fs');
const rimraf = require('rimraf');
const chai = require('chai');

chai.use(require('chai-as-promised'));

const {expect} = chai;

const daily = require('.');
const {put} = require('.');

describe('The "daily" put function', function () {
	const tmp = path.join(__dirname, '.data');

	afterEach(done =>
		rimraf(tmp, done)
	);

	it('should be able to write a day document', function () {
		const probe = co.wrap(function * () {
			const handler = yield daily({path: tmp});

			yield put({handler, day: '20120102', contents: 'hello world'});

			const contents = yield fs.readFile(path.join(handler.path, '20120102.md'), 'utf-8');

			return contents;
		});

		return expect(probe()).to.eventually.equal('hello world');
	});
});
