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

const {expect} = require('chai');
const rimraf = require('rimraf');

const daily = require('.');

describe('The "daily" base handler', function () {
	const tmp = path.join(__dirname, '.data');

	afterEach(done => rimraf(tmp, done));

	it('should be able to create the data directory at startup', function (done) {
		daily({path: tmp})
			.then(config => {
				expect(config.path).to.equal(tmp);
				expect(config.extension).to.equal('.md');

				expect(fs.existsSync(config.path)).to.equal(true);

				done();
			});
	});
});
