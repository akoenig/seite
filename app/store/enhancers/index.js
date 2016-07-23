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

import DeveloperTools from './DeveloperTools';

const createEnhancers = () => [
	// eslint-disable-next-line
	DeveloperTools()
];

export default createEnhancers;
