import React from 'react';

import API from './API';

import MovieForm from './MovieForm';
import MovieTable from './MovieTable';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [] };
  }

  componentDidMount() {
    API.loadMovies().then((movies) => {
      this.setState({ movies: movies });
    });
  }

  render() {
    return (
      <Container>
        <h1>My Movies</h1>
        <Row>
          <MovieTable movies={this.state.movies}
            deleteMovie={this.deleteMovie} />
        </Row>
        <h2>Add new movie</h2>
        <MovieForm addMovie={this.addMovie} />
      </Container>
    );
  }

  addMovie = async (movie) => {
    await API.addMovie(movie);
    let movies = await API.loadMovies();
    this.setState({ movies: movies });
  }

  deleteMovie = async (movieId) => {
    await API.deleteMovie(movieId);
    let movies = await API.loadMovies();
    this.setState({ movies: movies });
  }

}

export default App;
