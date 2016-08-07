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

const {h, Component} = require('preact');

const {Fragment, Introduction} = require('../components');

const styles = require('./Workspace.css');

class Workspace extends Component {
	render() {
		return (
			h('div', {class: styles.workspace.className},
				h('div', {class: styles.workspace__fragments.className},
					this.renderFragments()
				)
			)
		);
	}

	renderFragments() {
		const {fragments = ['asd']} = this.props;

		if (fragments.length) {
			return fragments.map(fragment =>
				h(Fragment, {fragment})
			);
		}

		return h(Introduction);
	}
}

module.exports = Workspace;
