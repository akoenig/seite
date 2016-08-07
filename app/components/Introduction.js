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

const styles = require('./Introduction.css');

const Introduction = () =>
	h('div', {class: styles.introduction.className},
		h('h1', {class: styles.introduction__title.className},
			'Hello!'
		),
		h('h2', {class: styles.introduction__subtitle.className},
			'Seems like we do not know each other.'
		),
		h('p', {class: styles.introduction__description.className},
			'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans. Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien.'
		)
	);

module.exports = Introduction;
