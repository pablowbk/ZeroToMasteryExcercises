movePlayer(100, "left")
  .then(() => movePlayer(400, "left"))
  .then(() => movePlayer(10, "right"))
  .then(() => movePlayer(330, "left"))


async function playerStart() {
  const first = await movePlayer(100, "left");
  const second = await movePlayer(400, "left");
  await movePlayer(10, "right");
  await movePlayer(330, "left");
}

////

// Using Promises ---->
fetch('https://jsonplaceholder.typicode.com/users')
  .then(resp => resp.json())
  .then(console.log)

// Using ASYNC
async function fetchUsers() {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await resp.json();
  console.log(data);
}


const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

//  promise approach ---->

Promise.all(urls.map(url => {
  return fetch(url).then(people => people.json()) //because we are  fetching the people data
})).then(array => { //because the result's gonna be an array
  console.log(array[0])
  console.log(array[1])
  console.log(array[2])
  console.log(array[3])
}).catch((err) => console.log("ERROR!", err));


// ASYNC approch ---->
const getData = async function() {
  try {
    const [ users, posts, albums ] = await Promise.all(urls.map(url =>
      fetch(url).then(resp => resp.json())
    ))
    console.log('users', users)
    console.log('posts', posts)
    console.log('albums', albums)
  } catch(err) {
    console.log("Error!", err)
  }
}
