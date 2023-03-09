//Create a function that grabs the number of snacks from the input and tells you to stop that many times

let stopHolder = document.querySelector("#stops")
let helpHolder = document.querySelector("#help").addEventListener("click", snacks)
function snacks(){
    let snacksQuan = document.querySelector("input").value
    let convertedSnacks = Number(snacksQuan)
    stopHolder.innerText = ""
    for(i = 0; i < convertedSnacks; i++){
        stopHolder.innerText += " Stops"
    }
    

}