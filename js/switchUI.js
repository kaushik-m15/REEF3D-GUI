const wallFunctions = document.getElementById('wall_functions')
const switchWallFunctions = document.getElementById('switch_wall_functions')
wallFunctions.addEventListener('change', () =>{
    if (wallFunctions.checked == true)
    switchWallFunctions.innerText = 'On'
    else
    switchWallFunctions.innerText = 'Off'
})