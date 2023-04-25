const BASE_URL = 'http://localhost:3000'


function getMovies (newMovie) {
    const options ={
        method: "POST",
        headers: {
         'Content-type': 'application/json'
     
        },
        body: JSON.stringify(newMovie)
     }
   return fetch(`${BASE_URL}/movies`, options)
.then(response => response.json())
.then(console.log)
}

// getMovies(newMovie)

function updateById(update, moviesId) {
    const options ={
        method: "PATCH",
        headers: {
         'Content-type': 'application/json'
     
        },
        body: JSON.stringify(update)
     }
    fetch(`${BASE_URL}/movies/${moviesId}`, options)
.then(response => response.json())
.then(console.log)
}
updateById({
    title: "відай  Сало",
    director: "Me",
    genres: [
      "  Drama"
    ],
    rating: 100457,
   
  }, 17)
