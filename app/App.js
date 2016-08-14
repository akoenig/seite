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

const {Header, Interactions, Workspace} = require('./components');

const styles = require('./App.css');

const App = () =>
	React.createElement('div', {className: styles.app.className},
		React.createElement('div', {className: styles.app__header.className},
			React.createElement(Header)
		),
		React.createElement('div', {className: styles.app__interactions.className},
			React.createElement(Interactions)
		),
		React.createElement('div', {className: styles.app__workspace.className},
			React.createElement(Workspace)
		)
	);

module.exports = App;
