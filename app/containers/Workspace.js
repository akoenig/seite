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
const {connect} = require('react-redux');

const {Fragment, Introduction} = require('../components');

const styles = require('./Workspace.css');

const mapStateToProps = ({fragments}) => ({
	fragments
});

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
		const {fragments} = this.props;

		if (fragments.length) {
			return fragments.map(fragment =>
				React.createElement('div', {key: fragment.created, className: styles.workspace__fragments__item},
					React.createElement(Fragment, {key: fragment.created, fragment})
				)
			);
		}

		return React.createElement(Introduction);
	}
}

module.exports = connect(mapStateToProps)(Workspace);
