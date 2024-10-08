const path = require('node:path')
const { contextBridge, ipcRenderer } = require('electron')
const { listenerCount } = require('node:process')
const { runInContext } = require('node:vm')

//window.addEventListener('DOMContentLoaded', () => {

//Directory selector
contextBridge.exposeInMainWorld('electronAPI', {
  openFile: () => ipcRenderer.invoke('dialog:openFile'),
  runSimulation: () => ipcRenderer.invoke('runSimulation'),
  simulationOutput: (callback) => ipcRenderer.on('simulation-output', (_event, value) => callback(value)),
})

//STL file selector
contextBridge.exposeInMainWorld('stlAPI', {
  openFile: () => ipcRenderer.invoke('stl:openFile')
})

//Save File
const ipc = {
  'channels': {
    'send': ['saveData']
  }
}

contextBridge.exposeInMainWorld('writeControlInput', {
  send: (channel, args) => {
    if (ipc.channels.send.includes(channel))
      ipcRenderer.send(channel, args);
  }
})