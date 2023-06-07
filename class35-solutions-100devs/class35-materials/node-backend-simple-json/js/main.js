document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

  const userName = document.querySelector("#userName").value;
  const res = await fetch(`/api?student=${userName}`)
  const data = await res.json()

  changeData(data)
  
}
async function changeData(data){
  document.querySelector("#personName").innerText = data.name
  document.querySelector("#personStatus").innerText = data.status
  document.querySelector("#personOccupation").innerText = data.currentOccupation
}