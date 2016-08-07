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

const Editor = require('./Editor');

const styles = require('./Fragment.css');

const Fragment = () =>
	h('div', {class: styles.fragment.className},
		h(Editor),
		h('div', {class: styles.fragment__footer.className},
			h('div', {class: styles.fragment__footer__left.className}, 'left'),
			h('div', {class: styles.fragment__footer__right.className}, 'right')
		)
	);

module.exports = Fragment;
