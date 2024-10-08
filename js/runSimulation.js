const runSimulationButton = document.getElementById('run_simulation')
const simErrors = document.getElementById('sim_errors')
var simOut = "No output captured."
var progressSimTime = 

runSimulationButton.addEventListener('click', async () => {
    window.electronAPI.runSimulation()
    window.electronAPI.simulationOutput((value) => {
        progressSimTime = value.match(/[\n]*simtime: *([^\n]*)/)
        simErrors.innerText = progressSimTime[1]
        simErrors.scrollTop = simErrors.scrollHeight
    })
})