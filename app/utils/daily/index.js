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

const co = require('co');
const fs = require('co-fs');

const envPaths = require('env-paths');

const paths = envPaths('seite', {suffix: 'app'});

const days = require('./days');
const fetch = require('./fetch');
const put = require('./put');

const daily = ({path = paths.data, extension = '.md'} = {}) =>
	co(function * () {
		const exists = yield fs.exists(path);

		if (!exists) {
			yield fs.mkdir(path);
		}

		return {
			path,
			extension
		};
	});

module.exports = daily;
module.exports.days = days;
module.exports.fetch = fetch;
module.exports.put = put;
