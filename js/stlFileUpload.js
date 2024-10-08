const selectStl = document.getElementById('selectStl')
const showStlPath = document.getElementById('showStlPath')
selectStl.addEventListener('click', async () => {
  const stlPath = await window.stlAPI.openFile()
  if (stlPath != "0") {
  selectStl.innerHTML = "Modify..."
  showStlPath.style.display = "block"
  showStlPath.innerText = stlPath
  selectStl.blur()
  solidHeading.style.backgroundColor = "#023E7D"
  }
})