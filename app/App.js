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

const {Header, PlusButton} = require('./components');
const {Workspace} = require('./containers');

const styles = require('./App.css');

const App = () =>
	React.createElement('div', {className: styles.app.className},
		React.createElement('div', {className: styles.app__header.className},
			React.createElement(Header)
		),
		React.createElement('div', {className: styles.app__interactions.className},
			React.createElement('div', {className: styles.app__interactions__item.className},
				React.createElement(PlusButton)
			)
		),
		React.createElement('div', {className: styles.app__workspace.className},
			React.createElement(Workspace)
		)
	);

module.exports = App;
