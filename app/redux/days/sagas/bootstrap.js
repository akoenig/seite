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

const {put} = require('redux-saga/effects');

const {load} = require('../actions');

function * bootstrap() {
	yield put(load());
}

module.exports = bootstrap;
