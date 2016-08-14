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

const {Fragment, Introduction} = require('../components');

const styles = require('./Workspace.css');

class Workspace extends Component {
	render() {
		return (
			React.createElement('div', {className: styles.workspace.className},
				React.createElement('div', {className: styles.workspace__fragments.className},
					this.renderFragments()
				)
			)
		);
	}

	renderFragments() {
		const {fragments = ['example']} = this.props;

		if (fragments.length) {
			return fragments.map((fragment, index) =>
				React.createElement(Fragment, {key: index, fragment})
			);
		}

		return React.createElement(Introduction);
	}
}

module.exports = Workspace;
