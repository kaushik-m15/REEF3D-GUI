const selectDir = document.getElementById('selectDir')
const dirPathElement = document.getElementById('workingPath')
var dirPath = 'undefined'
var controlTxtPath = 'undefined'

selectDir.addEventListener('click', async () => {
  dirPath = await window.electronAPI.openFile({})
  controlTxtPath = dirPath + '\\control.txt'
  if (dirPath != "0") {
  dirPathElement.style.display = "block"
  dirPathElement.innerText = dirPath
  selectDir.innerHTML = 'Change working directory...'
  selectDir.style.backgroundColor = "#023E7D"
  selectDir.style.backgroundImage = 'url("./assets/open-folder-check.svg")'
  selectDir.blur()
  }
})