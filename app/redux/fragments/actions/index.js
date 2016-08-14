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
	ADD_SUCCEEDED,
	EDIT_REQUESTED,
	EDIT_SUCCEEDED,
	REMOVE
} = require('../constants/actions');

const add = createAction(ADD_REQUESTED);
const addSucceeded = createAction(ADD_SUCCEEDED);

const edit = createAction(EDIT_REQUESTED);
const editSucceeded = createAction(EDIT_SUCCEEDED);
const remove = createAction(REMOVE);

module.exports = {
	add,
	addSucceeded,
	edit,
	editSucceeded,
	remove
};
