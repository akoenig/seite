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
const {put, select} = require('redux-saga/effects');

const {edit, editSucceeded} = require('../actions');

function * worker({payload}) {
	payload = Object.assign({}, payload, {
		modified: new Date().toISOString()
	});

	yield put(editSucceeded(payload));

	console.log(yield select());
}

module.exports = function * () {
	const {type} = edit();

	yield * takeEvery(type, worker);
};
