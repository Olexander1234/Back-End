const BASE_URL = 'http://localhost:3000'


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



 // GET /students - повернути всіх студентів.

 
 async function getReturnStudens() {
 const res = await fetch(`${BASE_URL}/students`)
 const student =  await res.json()
 const articles = await student.articles
 return console.log(student);
 }
 getReturnStudens()

// GET /students/:id - повернути студента за ідентифікатором.

async function getStudensById(studensId) {
  const res = await fetch(`${BASE_URL}/students/${studensId}`)
  const student =  await res.json()
 const articles = await student.articles
 return console.log(student);
     }

     getStudensById(2)
 

 // POST /students - додати нового студента.


 const newstudens = {
  name: "Jason Drknees ",
  age: 43,
  email: "jason.doe@example.com",
  phone: "456-1234"
 }

 async function postStudens (newstudens) {
      const options ={
          method: "POST",
         headers: {
          'Content-type': 'application/json'
       
        },
         body: JSON.stringify(newstudens)
       }
       const res = await fetch(`${BASE_URL}/students`, options)
       const student =  await res.json()
       const articles = await student.articles
       return console.log(student);
}

postStudens(newstudens)

// PUT /students/:id - оновити інформацію про студента за ідентифікатором.
const update = {
  
    name: "Jason Drknees ",
    age: 46,
    email: "jason.doe@example.com",
    phone: "3546745",

  
}
async function updateById(update, studentsId) {
  const options = {
    method: "PUT",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(update)
  }
  
  const res = await fetch(`${BASE_URL}/students/${studentsId}`, options)
  const student =  await res.json()
  const articles = await student.articles
  return console.log(student);
}
updateById(update, 5);


// // PATCH /students/:id - оновити часткову інформацію про студента за ідентифікатором.\



const updateget = {
  name: "Сало",
  age: 87,
}
async function updatePathById(update, studentsId) {
  const options = {
    method: "PATCH",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(update)
  }
  const res = await fetch(`${BASE_URL}/students/${studentsId}`, options)
  const student =  await res.json()
  const articles = await student.articles
  return console.log(student);
}


updatePathById( updateget, 5)



// DELETE /students/:id - видалити студента за ідентифікатором.

async function deletestudentsById (moviesId) {
  const res = await fetch(`${BASE_URL}/students/${moviesId}`, {method:'DELETE'})
  const student =  await res.json()
  const articles = await student.articles
  return console.log(student);
    }
  
    deletestudentsById(3)
  
// GET /students?age=:age - повернути всіх студентів з вказаним віком.


async  function ageStudents(age) {
  const res = await fetch(`${BASE_URL}/students?age=${age}`)
  const student =  await res.json()
  const articles = await student.articles
  return console.log(student);
}

ageStudents(19)


//GET /students?name=:name - повернути всіх студентів з вказаним ім'ям.

async function nameStudents(name) {
  const res = await  fetch(`${BASE_URL}/students?name=${name}`)
  const student =  await res.json()
  const articles = await student.articles
  return console.log(student);
}

nameStudents("Jason")


// GET /students?email=:email - повернути студента з вказаною електронною поштою.

async function emailStudents(email) {
  const res = await fetch(`${BASE_URL}/students?email=${email}`)
  const student =  await res.json()
  const articles = await student.articles
  return console.log(student);
}

emailStudents("john.doe@example.com")

// GET /students?phone=:phone - повернути студента з вказаним номером телефону.

async  function phoneStudents(phone) {
  const res = await fetch(`${BASE_URL}/students?phone=${phone}`)
    const student =  await res.json()
    const articles = await student.articles
    return console.log(student);
}

phoneStudents("555-1234")



async function getFruit(name) {
  const fruits = {
    strawberry: '🍓',
    kiwi: '🥝 ',
    apple: '🍎',
  };  

  return Promise.resolve(fruits[name])
}

// getFruit(' strawberry')
// .then(console.log())

async function makeSmoothie() {

  
 try{
  const strawberry = await getFruit('strawberry') 
  console.log(strawberry);

  const kiwi =  await getFruit('kiwi')
 console.log(kiwi);
 
 } catch (error) {
console.log('Помилка');
 }
 
 
  // getFruit('strawberry').then((res)=> {
  //   console.log(res),
  //   getFruit('kiwi').then(console.log)
  // }
   
    

}
makeSmoothie()