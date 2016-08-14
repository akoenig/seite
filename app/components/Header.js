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
const Logo = require('./Logo');

const styles = require('./Header.css');

const Header = () =>
	React.createElement('div', {className: styles.header.className},
		React.createElement(Logo)
	);

module.exports = Header;
