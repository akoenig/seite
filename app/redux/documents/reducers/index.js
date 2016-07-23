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

import {handleActions} from 'redux-actions';

const createState = () => ({
	days: {},
	entries: {}
});

const handlers = {};

export default handleActions(handlers, createState());
