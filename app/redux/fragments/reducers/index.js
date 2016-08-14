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

const {addSucceeded, editSucceeded} = require('../actions');

const createState = () => [];

const handlers = {
	[addSucceeded().type]: (state, {payload: fragment}) => [
		fragment,
		...state
	],
	[editSucceeded().type]: (state, {payload: {id, content, modified}}) =>
		state.map(fragment =>
			fragment.id === id ?
				Object.assign({}, fragment, {content, modified}) :
				fragment
		)
};

module.exports = handleActions(handlers, createState());
