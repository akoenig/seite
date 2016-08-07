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

const {put, take} = require('redux-saga/effects');
const dateformat = require('dateformat');

const {
	load,
	loadSucceeded
} = require('../actions');

function isToday(day) {
	if (!day) {
		return false;
	}

	const today = dateformat(new Date(), 'ddmmyyyy');

	return today === dateformat(day.raw, 'ddmmyyyy');
}

function * bootstrap() {
	yield put(load());

	const days = [...(yield take(loadSucceeded().type)).payload];

	if (!isToday(days[0])) {
		console.log('should create the file for today');
	}
}

module.exports = bootstrap;
