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
const {bindActionCreators} = require('redux');
const {connect} = require('react-redux');
const MdAdd = require('react-icons/lib/md/add');

const {add} = require('../redux/fragments/actions');

const styles = require('./Interactions.css');

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({add}, dispatch)
});

class Interactions extends Component {
	constructor() {
		super();

		this.add = () => this.props.actions.add();
	}

	render() {
		const {add} = this;

		return (
			React.createElement('ul', {className: styles.interactions.className},
				React.createElement('li', {className: styles.interactions__item.className},
					React.createElement(MdAdd, {onClick: add})
				)
			)
		);
	}
}

module.exports = connect(undefined, mapDispatchToProps)(Interactions);
