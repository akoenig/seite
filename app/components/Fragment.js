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
const {Component} = require('react');

const Editor = require('./Editor');

const styles = require('./Fragment.css');

class Fragment extends Component {

	constructor() {
		super();

		this.state = {hasFocus: false};
		this.onFocus = () => this.setState({hasFocus: true});
		this.onBlur = () => this.setState({hasFocus: false});
	}

	render() {
		const {hasFocus} = this.state;
		const {onFocus, onBlur} = this;

		return (
			React.createElement('div', {className: styles.fragment.className},
				React.createElement('div', {className: styles.fragment__editor.className},
					React.createElement(Editor, {hasFocus, onFocus, onBlur})
				),
				React.createElement('div', {className: styles.fragment__footer.className},
					React.createElement('div', {className: styles.fragment__footer__left.className}, '20. Juli 2015'),
					React.createElement('div', {className: styles.fragment__footer__right.className}, 'delete')
				)
			)
		);
	}
}

module.exports = Fragment;
