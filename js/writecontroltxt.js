const saveControlTxt = document.getElementById('savecontroltxt')
saveControlTxt.addEventListener('click', saveControlFs)

function saveControlFs() {
    if (controlTxtPath === 'undefined')
        window.alert("Select working directory!")
    else {
    window.writeControlInput.send('saveData', {
        'path': controlTxtPath,
        'data': appendDiveMesh()
    })
    }
}

function appendDiveMesh () {
    const append = `B 1 ${makeDouble(document.getElementById('meshsize').value)} //if error add bracket
B 10 0.0 ${makeDouble(document.getElementById('domainx').value)} 0.0 ${(makeDouble(document.getElementById('domainy').value))} 0.0 ${(makeDouble(document.getElementById('domainz').value))}
C 11 1
C 12 3
C 13 3
C 14 2
C 15 21
C 16 3`
    console.log(append)
    return append
}

function makeDouble (number) {
    var floatNumber = "0"
    var check = number.search(/\./)
    if (check == -1) {
        floatNumber = number + ".0"
    }
    else floatNumber = number
    return floatNumber
}