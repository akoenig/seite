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

const styles = require('./Logo.css');

const Logo = () =>
	h('div', {class: styles.logo.className},
		h('span', {class: styles.logo__title.className}, 'seite',
			h('span', {class: styles.logo__title__caret.className}, 'I')
		)
	);

module.exports = Logo;
