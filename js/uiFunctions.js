function toggleSelect(element, options) {
    var currentIndex = options.indexOf(document.getElementById(element).value)
    if (currentIndex != options.length - 1)
    return options[currentIndex + 1]
    else
    return options[0]
}

export default toggleSelect