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

import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

import createEnhancers from './enhancers';
import createMiddlewares from './middlewares';

const configureStore = options => {
	const middlewares = createMiddlewares(options.middlewares);
	const enhancers = createEnhancers(options.enhancers);

	const {reducers, initialState} = options;

	return createStore(
		combineReducers(reducers),
		initialState,
		compose(
			applyMiddleware(...middlewares),
			...enhancers
		)
	);
};

export default configureStore;
