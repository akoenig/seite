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

const persister = () => store => next => action => {
	const nextState = next(action);

	console.log('write');

	window.localStorage.setItem('@akoenig/seite', JSON.stringify(store.getState()));

	return nextState;
};

const rehydrate = () =>
	JSON.parse(window.localStorage.getItem('@akoenig/seite')) || {};

module.exports = {
	persister,
	rehydrate
};
