//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?
document.querySelector("h1").addEventListener("click", twentyOne)
function twentyOne(){
    document.querySelector("#savageSays").innerText = ""
    for(i=0;i<21;i++){
        console.log("21")
        document.querySelector("#savageSays").innerText += " 21 "
    }
}
