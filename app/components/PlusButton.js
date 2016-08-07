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

const styles = require('./PlusButton.css');

const PlusButton = () =>
	h('div', {class: styles.plus.className},
		'+'
	);

module.exports = PlusButton;
