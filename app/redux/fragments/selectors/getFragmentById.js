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

const {createSelector} = require('reselect');

const getFragments = require('./getFragments');

module.exports = createSelector(
	[getFragments, (state, id) => id],
	(fragments, id) => fragments.filter(fragment => fragment.id === id).shift()
);
