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

const {h} = require('preact');
const {connect} = require('preact-redux');

const {Editor, Sidebar} = require('./components');

const styles = require('./App.css');

const mapStateToProps = ({days}) => ({
	days: days.entries
});

const App = ({days}) =>
	h('div', {class: styles.app.className},
		h('div', {class: styles.app__dragbar.className}),
		h('div', {class: styles.app__sidebar.className},
			h(Sidebar, {days})
		),
		h('div', {class: styles.app__editor.className},
			h(Editor)
		)
	);

module.exports = connect(mapStateToProps)(App);
