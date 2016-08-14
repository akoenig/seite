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

const Editor = ({hasFocus, onBlur, onFocus, onChange}) =>
	React.createElement('div', {className: `${styles.editor.className} ${hasFocus ? styles['editor--focus'].className : ''}`},
		React.createElement(Textarea, {
			className: styles.editor__textarea, rows: 1,
			onBlur,
			onFocus,
			onChange
		})
	);

Editor.propTypes = {
	hasFocus: React.PropTypes.bool.isRequired,
	onBlur: React.PropTypes.func.isRequired,
	onFocus: React.PropTypes.func.isRequired,
	onChange: React.PropTypes.func.isRequired
};

module.exports = Editor;
