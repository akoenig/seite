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

const {reducers: DaysReducers, sagas: DaysSagas} = require('./days');

const reducers = {
	days: DaysReducers
};

const sagas = [
	...DaysSagas
];

module.exports.reducers = reducers;
module.exports.sagas = sagas;
