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
const MdDelete = require('react-icons/lib/md/delete');
const dateformat = require('dateformat');

const {edit, remove} = require('../redux/fragments/actions');
const {getFragmentById} = require('../redux/fragments/selectors');

const Editor = require('./Editor');

const styles = require('./Fragment.css');

const mapStateToProps = (state, {id}) =>
	getFragmentById(state, id);

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators({edit, remove}, dispatch)
});

class Fragment extends Component {
	constructor() {
		super();

		this.state = {hasFocus: false};
		this.onFocus = () => this.setState({hasFocus: true});
		this.onBlur = () => this.setState({hasFocus: false});
		this.onChange = e => {
			const {id, actions: {edit}} = this.props;
			const content = e.target.value;

			edit({id, content});
		};

		this.onRemove = () => {
			const {id, actions: {remove}} = this.props;

			remove({id});
		};
	}

	renderTimestamps() {
		const {created, modified} = this.props;

		let serialization = `Created: ${dateformat(created, 'dd. mmmm yyyy, HH:MM:ss')}`;

		if (modified) {
			serialization += ` / Modified: ${dateformat(modified, 'dd. mmmm yyyy, HH:MM:ss')}`;
		}

		return serialization;
	}

	render() {
		const {hasFocus} = this.state;
		const {onFocus, onBlur, onChange, onRemove} = this;
		const {content} = this.props;

		return (
			React.createElement('div', {className: styles.fragment.className},
				React.createElement('div', {className: styles.fragment__editor.className},
					React.createElement(Editor, {hasFocus, onFocus, onBlur, onChange, value: content})
				),
				React.createElement('div', {className: styles.fragment__footer.className},
					React.createElement('div', {className: styles.fragment__footer__left.className},
						this.renderTimestamps()
					),
					React.createElement('div', {
						className: styles.fragment__footer__right.className,
						onClick: onRemove
					},
						React.createElement(MdDelete)
					)
				)
			)
		);
	}
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Fragment);
