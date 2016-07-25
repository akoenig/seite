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

const {handleActions} = require('redux-actions');

const {
	LOAD_SUCCEEDED
} = require('../constants/actions');

const createState = () => ({
	entries: []
});

const handlers = {
	[LOAD_SUCCEEDED]: (state, {payload: days}) => Object.assign({}, state, {entries: days})
};

module.exports = handleActions(handlers, createState());
