dayWritten = document.querySelector("#check").addEventListener("click", setDay)

function setDay (){
  dayInput = document.getElementById("day").value.toLowerCase(  )
  if (dayInput == "saturday" || dayInput == "sunday"){
    alert("Weekend")
  }
  else if ( dayInput === "thursday" || dayInput === "tuesday"){
    alert("Class Day")
  }
  else {
    alert("Boring DAy")
  }
}
