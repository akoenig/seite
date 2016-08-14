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

const {createStore: _createStore, combineReducers, applyMiddleware, compose} = require('redux');
const createSagaMiddleware = require('redux-saga').default;

const {rehydrate, persister} = require('./persister');

const createStore = options => {
	const initialState = rehydrate();

	//
	// Define middlewares
	//
	const middlewares = {
		saga: createSagaMiddleware(),
		persister: persister()
	};

	//
	// Define enhancers
	//
	const enhancers = [

	];

	const store = _createStore(
		combineReducers(options.reducers),
		initialState,
		compose(
			applyMiddleware(
				middlewares.saga,
				middlewares.persister
			),
			...enhancers
		)
	);

	//
	// Run sagas
	//
	options.sagas.forEach(saga => middlewares.saga.run(saga));

	return store;
};

module.exports = createStore;
