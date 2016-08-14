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

const styles = require('./Logo.css');

const Logo = () =>
	React.createElement('div', {className: styles.logo.className},
		React.createElement('span', {className: styles.logo__title.className}, 'seite',
			React.createElement('span', {className: styles.logo__title__caret.className}, 'I')
		)
	);

module.exports = Logo;
