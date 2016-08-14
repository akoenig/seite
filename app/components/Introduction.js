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

const styles = require('./Introduction.css');

const Introduction = () =>
	React.createElement('div', {className: styles.introduction.className},
		React.createElement('h1', {className: styles.introduction__title.className},
			'Hello!'
		),
		React.createElement('h2', {className: styles.introduction__subtitle.className},
			'Seems like we do not know each other.'
		),
		React.createElement('p', {className: styles.introduction__description.className},
			'Weit hinten, hinter den Wortbergen, fern der Länder Vokalien und Konsonantien leben die Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste des Semantik, eines großen Sprachozeans. Ein kleines Bächlein namens Duden fließt durch ihren Ort und versorgt sie mit den nötigen Regelialien.'
		)
	);

module.exports = Introduction;
