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

const styles = require('./Editor.css');

const Editor = () =>
	React.createElement('div', {className: styles.editor.className},
		React.createElement('textarea', {className: styles.editor__textarea.className})
	);

module.exports = Editor;
