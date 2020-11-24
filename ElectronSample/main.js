'use strict';

const { app, BrowserWindow, ipcMain, nativeTheme } = require('electron')
const { Notification } = require('electron')
const path      = require('path');

const APP_NAME = 'App Dash';
const VERSION = '0.3.0';

//Creates a new browser window!
function createWindow () {
    const win = new BrowserWindow({
		backgroundColor: '#1A242D',
		width: 1100,
		height: 580,
		center: true,
		title: app.getName(),
		minHeight: 500,
        minWidth: 900,
      	webPreferences: {
      	  	nodeIntegration: true
      	}
    })

    win.loadFile('index.html')
    //Will open the chrome dev tools
    //win.webContents.openDevTools()
  }

  app.setName(APP_NAME);

  app.whenReady().then(createWindow).then(showNotification)

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })

  function showNotification () {
	const notification = {
	  title: 'Basic Notification',
	  body: 'Notification from the Main process'
	}
	new Notification(notification).show()
  }