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

import Saga from './Saga';

const createMiddlewares = ({sagas}) => [
	// eslint-disable-next-line
	Saga(sagas)
];

export default createMiddlewares;
