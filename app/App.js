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

const {Header, PlusButton} = require('./components');
const {Workspace} = require('./containers');

const styles = require('./App.css');

const App = () =>
	h('div', {class: styles.app.className},
		h('div', {class: styles.app__header.className},
			h(Header)
		),
		h('div', {class: styles.app__interactions.className},
			h('div', {class: styles.app__interactions__item.className},
				h(PlusButton)
			)
		),
		h('div', {class: styles.app__workspace.className},
			h(Workspace)
		)
	);

module.exports = App;
