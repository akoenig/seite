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

const {h, render} = require('preact');
const {Provider} = require('preact-redux');

const App = require('./App');

const {reducers, sagas} = require('./redux');
const createStore = require('./store');

const store = createStore({reducers, sagas});

render(
	h(Provider, {store},
		h(App)
	)
, document.getElementById('app'));
