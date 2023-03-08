fahrenheit = document.querySelector("#fahrenheitValue").value
stringToReturn = document.querySelector("#returnValue")
convertButton = document.querySelector("#convertButton").addEventListener("click", convert)
function convert() {
    reducedFah = fahrenheit - 32
    formula = 5 / 9
    celsius = reducedFah * formula
    stringToReturn.innerText(celsius)

}

