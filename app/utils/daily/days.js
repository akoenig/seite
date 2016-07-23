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

const days = ({handler}) =>
	co(function * () {
		const {path: dataPath, extension} = handler;
		const files = yield fs.readdir(dataPath);

		return files
			.filter(file => file.indexOf(extension) !== -1)
			.map(file => path.basename(file, extension))
			.sort((a, b) => b - a);
	});

module.exports = days;
