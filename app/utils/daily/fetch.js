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

const fetch = co.wrap(function * ({handler, day}) {
	const {path: dataPath, extension} = handler;
	const contents = yield fs.readFile(path.join(dataPath, `${day}${extension}`), 'utf-8');

	return contents;
});

module.exports = fetch;
