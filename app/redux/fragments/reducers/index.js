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

const {addSucceeded} = require('../actions');

const createState = () => [];

const handlers = {
	[addSucceeded().type]: (state, {payload: fragment}) => [
		fragment,
		...state
	]
};

module.exports = handleActions(handlers, createState());
