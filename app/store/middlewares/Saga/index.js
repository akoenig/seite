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

import createSagaMiddleware from 'redux-saga';

const configureSagaMiddleware = sagas => {
	const mw = createSagaMiddleware();

	//
	// Apply all sagas in the next tick
	//
	setTimeout(() =>
		Object.keys(sagas).forEach(key => mw.run(sagas[key]))
	, 0);

	return mw;
};

export default configureSagaMiddleware;
