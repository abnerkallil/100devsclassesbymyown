document.querySelector('#clickMe').addEventListener('click', makeReq)
document.querySelector("#flipCoin").addEventListener("click", makeCoinFlip)
async function makeReq(){

  const userName = document.querySelector("#userName").value;
  const res = await fetch(`/api?student=${userName}`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#personName").textContent = data.name
  document.querySelector("#personStatus").textContent = data.status
  document.querySelector("#personOccupation").textContent = data.currentOccupation
}
async function makeCoinFlip(){

  console.log("Hello")
  const res = await fetch(`/coinflip/flip`)
  const data = await res.json()

  console.log(data);
  document.querySelector("#coinFase").textContent = data.value
}