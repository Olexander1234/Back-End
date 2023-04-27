// const BASE_URL = 'http://localhost:3000'


// function getMovies (newMovie) {
//     const options ={
//         method: "POST",
//         headers: {
//          'Content-type': 'application/json'
     
//         },
//         body: JSON.stringify(newMovie)
//      }
//    return fetch(`${BASE_URL}/movies`, options)
// .then(response => response.json())
// .then(console.log)
// }

// // getMovies(newMovie)

// function updateById(update, moviesId) {
//     const options ={
//         method: "PATCH",
//         headers: {
//          'Content-type': 'application/json'
     
//         },
//         body: JSON.stringify(update)
//      }
//     fetch(`${BASE_URL}/movies/${moviesId}`, options)
// .then(response => response.json())
// .then(console.log)
// }
// updateById({
//     title: "відай  Сало",
//     director: "Me",
//     genres: [
//       "  Drama"
//     ],
//     rating: 100457,
   
//   }, 17)


//   function deleteMovieById (moviesId) {
//     fetch(`${BASE_URL}/movies/${moviesId}`, {method:'DELETE'})
//     .then(res=>res.json())
//   }

//   deleteMovieById(16)




// GET /students - повернути всіх студентів.
// GET /students/:id - повернути студента за ідентифікатором.
// POST /students - додати нового студента.
// PUT /students/:id - оновити інформацію про студента за ідентифікатором.
// PATCH /students/:id - оновити часткову інформацію про студента за ідентифікатором.
// DELETE /students/:id - видалити студента за ідентифікатором.
// GET /students?age=:age - повернути всіх студентів з вказаним віком.
// GET /students?name=:name - повернути всіх студентів з вказаним ім'ям.
// GET /students?email=:email - повернути студента з вказаною електронною поштою.
// GET /students?phone=:phone - повернути студента з вказаним номером телефону.

const BASE_URL = 'http://localhost:3000'

 // GET /students - повернути всіх студентів.

 function getReturnStudens() {
  fetch(`${BASE_URL}/students`)
  .then(response => response.json())
  .then(data=> console.log(data))

 }
 getReturnStudens()

// GET /students/:id - повернути студента за ідентифікатором.

function getStudensById(studensId) {
  fetch(`${BASE_URL}/students/${studensId}`)
  .then(res=>res.json())
  .then(data=> console.log(data))
     }

     getStudensById(2)
 

 // POST /students - додати нового студента.


 const newstudens = {
  name: "Jason Drknees ",
  age: 43,
  email: "jason.doe@example.com",
  phone: "456-1234"
 }

 function postStudens (newstudens) {
      const options ={
          method: "POST",
         headers: {
          'Content-type': 'application/json'
       
        },
         body: JSON.stringify(newstudens)
       }
    return fetch(`${BASE_URL}/students`, options)
 .then(response => response.json())
 .then(data=> console.log(data))
}

postStudens(newstudens)

// PUT /students/:id - оновити інформацію про студента за ідентифікатором.
// const update = {
  
//     name: "Jason Drknees ",
//     age: 46,
//     email: "jason.doe@example.com",
//     phone: "3546745",
//     id: 4
  
// }
// function updateById(update, studentsId) {
//   const options = {
//     method: "PUT",
//     headers: {
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify(update)
//   }
//   fetch(`${BASE_URL}/students/${studentsId}`, options)
//     .then(response => response.json())
//     .then(data => console.log(data))
// }
// updatePathById(5, update);


// // PATCH /students/:id - оновити часткову інформацію про студента за ідентифікатором.\



// const updateget = {
//   name: "Сало",
//   age: 87,
// }
// function updatePathById(update, studentsId) {
//   const options = {
//     method: "PATCH",
//     headers: {
//       'Content-type': 'application/json'
//     },
//     body: JSON.stringify(update)
//   }
//   fetch(`${BASE_URL}/students/${studentsId}`, options)
//     .then(response => response.json())
//     .then(data => console.log(data))
// }


// updateById(5, updateget)



// DELETE /students/:id - видалити студента за ідентифікатором.

function deletestudentsById (moviesId) {
      fetch(`${BASE_URL}/students/${moviesId}`, {method:'DELETE'})
      .then(res=>res.json())
    }
  
    deletestudentsById(7)
  
// GET /students?age=:age - повернути всіх студентів з вказаним віком.


function ageStudents(age) {
  fetch(`${BASE_URL}/students/age=${age}`)
  .then(res=>res.json())
}

ageStudents(19)