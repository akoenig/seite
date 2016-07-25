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

const {LOAD_REQUESTED, LOAD_SUCCEEDED, LOAD_FAILED} = require('../constants/actions');

const load = createAction(LOAD_REQUESTED);
const loadSucceeded = createAction(LOAD_SUCCEEDED);
const loadFailed = createAction(LOAD_FAILED);

module.exports.load = load;
module.exports.loadSucceeded = loadSucceeded;
module.exports.loadFailed = loadFailed;
