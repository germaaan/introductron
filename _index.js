'use strict';
var fs = require('fs');

const electron = require('electron');

const app = electron.app;

// adds debug features like hotkeys for triggering dev tools and reload
require('electron-debug')();

// prevent window being garbage collected
let mainWindow;

function onClosed() {
	// dereference the window
	// for multiple windows store them in an array
	mainWindow = null;
}

function saveFile() {
	fs.writeFile("prueba.txt", "Hey there!", function(err) {
		if (err) {
			return console.log(err);
		}

		console.log("The file was saved!");
	});
}

function createMainWindow() {
	const win = new electron.BrowserWindow({
		width: 800,
		height: 600
	});

	saveFile();
	win.loadURL(`file://${__dirname}/index.html`);
	win.on('closed', onClosed);

	return win;
}

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (!mainWindow) {
		mainWindow = createMainWindow();
	}
});

app.on('ready', () => {
	mainWindow = createMainWindow();
});