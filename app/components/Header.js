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

const styles = require('./Header.css');

const Header = () =>
	h('div', {class: styles.header.className},
		h(Logo)
	);

module.exports = Header;
