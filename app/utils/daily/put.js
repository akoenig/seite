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

const put = co.wrap(function * ({handler, day, contents}) {
	const {path: dataPath, extension} = handler;

	yield fs.writeFile(path.join(dataPath, `${day}${extension}`), contents);
});

module.exports = put;
