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

const electron = require('electron');

const {app} = electron;

const {BrowserWindow} = electron;

app.on('ready', () => {
	let win = new BrowserWindow({
		title: 'seite',
		fullscreenable: false,
		center: true,
		resizable: false,
		width: 1024,
		height: 768,
		titleBarStyle: 'hidden'
	});

	win.loadURL(`file://${__dirname}/index.html`);

	win.on('closed', () => {
		win = null;
	});
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
