// Solve the below problems:

// #1) Convert the below promise into async await
fetch('https://swapi.co/api/starships/9/')
  .then(response => response.json())
  .then(console.log)

const getData = async function() {
  const data = await fetch('https://swapi.co/api/starships/9/');
  const dataFetched = await data.json();
  console.log(dataFetched);
}
//YEAAAAAAAAAAAAAAAH

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  const [ users, posts, albums ] = await Promise.all(urls.map(url => fetch(url)));
  const fUsers = await users.json();
  const fPosts = await posts.json();
  const fAlbums = await albums.json();

  console.log('users', fUsers);
  console.log('posts', fPosts);
  console.log('albums', fAlbums);
}

// ANdrei's WAY
/*
const getData = async function() {
  const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
      const response = await fetch(url);
      return response.json();
  }));
  console.log('users', users);
  console.log('posts', posts);
  console.log('albums', albums);
}
*/

// #3) Add a try catch block to the #2 solution in order to catch any errors.
// Now chnage one of the urls so you console.log your error with 'ooooooops'

const getData = async function() {
  try {
    const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
      const resp = await fetch(url);
      return resp.json()
    }));
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  } catch(err) {
    console.log('MISSTAAKEEE', err);
  }
}
