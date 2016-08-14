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
const Textarea = require('react-autosize-textarea');

const styles = require('./Editor.css');

const Editor = () =>
	React.createElement('div', {className: styles.editor.className},
		React.createElement(Textarea, {className: styles.editor__textarea.className, rows: 1})
	);

module.exports = Editor;
