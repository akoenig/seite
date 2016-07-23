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

const csjs = require('csjs');
const inject = require('insert-css');

module.exports = css => {
	const styles = csjs`${css}`;

	inject(csjs.getCss(styles));

	return styles;
};
