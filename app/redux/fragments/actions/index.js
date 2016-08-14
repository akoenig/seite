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

const {createAction} = require('redux-actions');

const {
	ADD_REQUESTED,
	ADD_SUCCEEDED
} = require('../constants/actions');

const add = createAction(ADD_REQUESTED);
const addSucceeded = createAction(ADD_SUCCEEDED);

module.exports = {
	add,
	addSucceeded
};
