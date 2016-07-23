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

const styles = require('./Editor.css');

const Editor = () =>
	h('div', {class: styles.editor.className},
		h('textarea', {class: styles.editor__textarea.className})
	);

module.exports = Editor;
