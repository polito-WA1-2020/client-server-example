const APIURL = 'http://localhost:3010/api';

async function loadMovies() {
  const response = await fetch(APIURL+'/movies');
  const json = await response.json();
  return json ;
}

async function addMovie(movie) {
  const response = await fetch(APIURL+'/movies', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(movie)
  });
  const json = await response.json();
  return json ;
}

async function deleteMovie(id) {
  const response = await fetch(APIURL+`/movies/${id}`, {
    method: 'delete',
  });
  const json = await response.json();
  return json ;

}

export default { loadMovies, addMovie, deleteMovie };