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

const {Editor, Sidebar} = require('./components');

const styles = require('./App.css');

const App = () =>
	h('div', {class: styles.app.className},
		h('div', {class: styles.app__dragbar.className}),
		h('div', {class: styles.app__sidebar.className},
			h(Sidebar, {captions: ['12. Juli 2016']})
		),
		h('div', {class: styles.app__editor.className},
			h(Editor)
		)
	);

module.exports = App;
