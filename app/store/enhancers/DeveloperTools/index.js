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

const DeveloperTools = () =>
	window.devToolsExtension ? window.devToolsExtension() : f => f;

export default DeveloperTools;
