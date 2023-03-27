//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        let cocktailName = document.querySelector("h2")
        let cocktailInstructions = document.querySelector("h3")
        let cocktailImg = document.querySelector("img")
        cocktailName.innerText = data.drinks[0].strDrink
        cocktailInstructions.innerText = data.drinks[0].strInstructions
        cocktailImg.src = data.drinks[0].strDrinkThumb


      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}