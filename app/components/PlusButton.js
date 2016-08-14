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

const styles = require('./PlusButton.css');

const PlusButton = () =>
	React.createElement('div', {className: styles.plus.className},
		'+'
	);

module.exports = PlusButton;
