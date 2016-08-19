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

const {app, BrowserWindow, Menu} = require('electron');

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

	const template = [{
		label: 'Edit',
		submenu: [
			{label: 'Undo', accelerator: 'CmdOrCtrl+Z', selector: 'undo:'},
			{label: 'Redo', accelerator: 'Shift+CmdOrCtrl+Z', selector: 'redo:'},
			{type: 'separator'},
			{label: 'Cut', accelerator: 'CmdOrCtrl+X', selector: 'cut:'},
			{label: 'Copy', accelerator: 'CmdOrCtrl+C', selector: 'copy:'},
			{label: 'Paste', accelerator: 'CmdOrCtrl+V', selector: 'paste:'},
			{label: 'Select All', accelerator: 'CmdOrCtrl+A', selector: 'selectAll:'}
		]
	}];

	Menu.setApplicationMenu(Menu.buildFromTemplate(template));
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});
