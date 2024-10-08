const { app, BrowserWindow, dialog, ipcMain } = require('electron/main');
const path = require('node:path')
const fs = require('fs')
const spawn = require('child_process').spawn
var win

function runSimulation () {
  console.log('Simulation started!')
  var child = spawn('powershell.exe',['./run_reef3d.ps1'])
  //var consoleout
  child.stdout.setEncoding('utf8')
  child.stdout.on('data', (data) => {
    console.log('[PSH] ' + data)
    //data = data.toString()
    //consoleout += data
    win.webContents.send('simulation-output', data)
  })
  child.stderr.on('data', (data) => {
    console.log('Powershell errors: ' + data)
  })
  child.on('exit', () => {
    console.log('\nPowershell script finished.')
  })
  child.stdin.end()
}

//Directory picker IPC
async function handleDirOpen () {
  const { canceled, filePaths } = await dialog.showOpenDialog({properties:['openDirectory']})
  if (canceled) {
    return 0
  } else {
    return filePaths[0]
  }
}

//STL picker IPC
async function handleSTLOpen () {
  const { canceled, filePaths } = await dialog.showOpenDialog({
    properties:['openFile'],
    filters: [
      { name: 'Stereolithography File', extensions: ['stl', 'STL']
      }
    ]
  })
  if (canceled) {
    return 0 
  } else {
    return filePaths[0]
  }
}

//control.txt write IPC
function writeControlInput(event, object) {
  fs.writeFileSync(object.path, object.data)
  console.log(object.data + "\n written to " + object.path)
}

function createWindow () {
    //Creates the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 700,
    maximizable: false,
    resizable: false,
    icon: "./assets/logo.ico",
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#0353A4',
      symbolColor: 'white'
    },
    frame: false,
    webPreferences: {
        nodeIntegration: true,
        preload: path.join(__dirname, 'preload.js')
    }
  })
  win.loadFile('index.html')
}

  app.whenReady().then(() => {
    ipcMain.handle('dialog:openFile', handleDirOpen)
    ipcMain.handle('stl:openFile', handleSTLOpen)
    ipcMain.on('saveData', writeControlInput)
    ipcMain.handle('runSimulation', runSimulation)
    createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})