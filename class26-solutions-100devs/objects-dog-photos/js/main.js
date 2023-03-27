//Get a dog photo from the dog.ceo api and place the photo in the DOM
fetch("https://dog.ceo/api/breeds/image/random")
.then(res => res.json())
.then(data => {
    console.log(data)
    console.log(data.message)
    img = document.querySelector("img")
    img.src = data.message
})
.catch(err => {
    console.log(`error ${err}`)
});

