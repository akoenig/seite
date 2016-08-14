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

const {reducers: FragmentsReducers, sagas: FragmentsSagas} = require('./fragments');

const reducers = {
	fragments: FragmentsReducers
};

const sagas = [
	...FragmentsSagas
];

module.exports.reducers = reducers;
module.exports.sagas = sagas;
