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
const {connect} = require('react-redux');

const Fragment = require('./Fragment');
const Introduction = require('./Introduction');

const styles = require('./Workspace.css');

const mapStateToProps = ({fragments}) => ({
	fragments
});

const Workspace = ({fragments}) =>
	React.createElement('div', {className: styles.workspace.className},
		React.createElement('div', {className: styles.workspace__fragments.className},
			fragments.length ? fragments.map(({id}) =>
				React.createElement('div', {key: id, className: styles.workspace__fragments__item},
					React.createElement(Fragment, {id})
				)
			) : React.createElement(Introduction)
		)
	);

module.exports = connect(mapStateToProps)(Workspace);
