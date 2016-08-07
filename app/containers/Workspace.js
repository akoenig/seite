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

const {Introduction} = require('../components');

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
		const {fragments = []} = this.props;

		if (fragments.length) {
			return h('div', {}, ';(');
		}

		return h(Introduction);
	}
}

module.exports = Workspace;
