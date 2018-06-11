require('dotenv').config()
const path = require('path')
const { app, BrowserWindow } = require('electron')

let mainWindow

const createWindow = () => {
  mainWindow = new BrowserWindow({ width: 1250, height: 900 })
  mainWindow.loadURL('http://localhost:8080/')
  mainWindow.on('closed', () => mainWindow = null )
}

app.on('ready', createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin' ) app.quit()
})
app.on('activate', () => {
  if (mainWindow === null) createWindow()
})
