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

const {h, render} = require('preact');

const App = require('./App');

console.log(App);

render(h(App), document.getElementById('app'));
