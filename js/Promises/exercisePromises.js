// Solve the questions below:

/* -----> code from lesson <--------
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve('Stuff Worked');
  } else {
    reject('It broke')
  }
})

promise.then(result => console.log(result));
*/

// #1) Create a promise that resolves in 4 seconds and returns "success" string

const prom1 = new Promise((resolve, reject) => {
  setTimeout(resolve,4000,"success!");
  }
)

// #2) Run the above promise and make it console.log "success"
prom1.then((result)=> console.log(result));

// #3) Read about Promise.resolve() and Promise.reject(). How can you make
// the above promise shorter with Promise.resolve() and console loggin "success"

const prom2 = Promise.resolve(
  setTimeout( () => {
    console.log('Success!');
  }, 4000)
)

// #4) Catch this error and console log 'Ooops something went wrong'
Promise.reject('failed') {
  .catch(console.log('Ooops something went wrong'));
}



// #5) Use Promise.all to fetch all of these people from Star Wars (SWAPI) at the same time.
// Console.log the output and make sure it has a catch block as well.
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url => {
  return fetch(url)
  .then(resp => resp.json())
}))
.then(results => {
  console.log(results[0])
  console.log(results[1])
  console.log(results[2])
  console.log(results[3])
}).catch(() => console.log("ERROR!"));

//Same code, but with keywords changed, to better
//show what the values are

Promise.all(urls.map(url => {
  return fetch(url).then(people => people.json()) //because we are  fetching the people data
})).then(array => { //because the result's gonna be an array
  console.log(array[0])
  console.log(array[1])
  console.log(array[2])
  console.log(array[3])
}).catch((err) => console.log("ERROR!", err));


// #6) Change one of your urls above to make it incorrect and fail the promise
// does your catch block handle it?
