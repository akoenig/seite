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
const MdAdd = require('react-icons/lib/md/add');

const styles = require('./Interactions.css');

const Interactions = () =>
	React.createElement('ul', {className: styles.interactions.className},
		React.createElement('li', {className: styles.interactions__item.className},
			React.createElement(MdAdd)
		)
	);

module.exports = Interactions;
