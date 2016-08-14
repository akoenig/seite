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

const Editor = require('./Editor');

const styles = require('./Fragment.css');

const Fragment = () =>
	React.createElement('div', {className: styles.fragment.className},
		React.createElement('div', {className: styles.fragment__editor.className},
			React.createElement(Editor)
		),
		React.createElement('div', {className: styles.fragment__footer.className},
			React.createElement('div', {className: styles.fragment__footer__left.className}, '20. Juli 2015'),
			React.createElement('div', {className: styles.fragment__footer__right.className}, 'delete')
		)
	);

module.exports = Fragment;
