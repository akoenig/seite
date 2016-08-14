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

const React = require('react');
const {render} = require('react-dom');
const {Provider} = require('react-redux');

const App = require('./App');

const {reducers, sagas} = require('./redux');
const createStore = require('./store');

const store = createStore({reducers, sagas});

render(
	React.createElement(Provider, {store},
		React.createElement(App)
	)
, document.getElementById('app'));
