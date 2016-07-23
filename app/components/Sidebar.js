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

const Logo = require('./Logo');

const styles = require('./Sidebar.css');

const Sidebar = ({captions, onCaptionClick}) =>
	h('div', {class: styles.sidebar.className},
		h('div', {class: styles.sidebar__logo.className},
			h(Logo)
		),
		h('ul', {class: styles.sidebar__captions.className},
			captions.map(caption =>
				h('li', {class: styles.sidebar__captions__entry.className, onClick: onCaptionClick}, caption)
			)
		)
	);

module.exports = Sidebar;
