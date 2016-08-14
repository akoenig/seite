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
const {put} = require('redux-saga/effects');
const uuid = require('node-uuid');

const {add, addSucceeded} = require('../actions');

function * worker({payload}) {
	const fragment = Object.assign({}, payload, {
		id: uuid.v4(),
		created: new Date().toISOString()
	});

	yield put(addSucceeded(fragment));
}

module.exports = function * () {
	const {type} = add();

	yield * takeEvery(type, worker);
};
