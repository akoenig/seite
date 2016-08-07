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

const {takeEvery} = require('redux-saga');
const {call, put} = require('redux-saga/effects');
const dateformat = require('dateformat');

const daily = require('../../../utils/daily');
const {days} = require('../../../utils/daily');

const {
	load,
	loadSucceeded,
	loadFailed
} = require('../actions');

function * worker() {
	try {
		const handler = yield daily();
		const results = (yield call(days, {handler}))
			.map(unix => ({
				unix,
				raw: parseInt(unix * 1000, 10),
				human: dateformat(unix * 1000, 'dd. mmmm yyyy')
			}));

		yield put(loadSucceeded(results));
	} catch (err) {
		yield put(loadFailed(err));
	}
}

function * loadDays() {
	yield * takeEvery(load().type, worker);
}

module.exports = loadDays;
