import React from 'react';

import API from './API';

import MovieForm from './MovieForm';
import MovieTable from './MovieTable';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';


import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { movies: [], loading: true };
  }

  componentDidMount() {
    API.loadMovies().then((movies) => {
      this.setState({ movies: movies, loading: false });
    });
  }

  render() {
    return (
      <Router>
        <Container>
          <h1><Link to='/'>My Movies {this.state.loading ? '(...)' : ''}</Link></h1>
          <Switch>
            <Route path='/add'>
              <h2>Add new movie</h2>
              <MovieForm addMovie={this.addMovie} />
            </Route>

            <Route path='/'>
              <Row>
                <MovieTable movies={this.state.movies}
                  deleteMovie={this.deleteMovie} />
              </Row>
              <Switch>
                <Route path='/detail/:id' render={(props) => {
                  let theMovie = this.state.movies.find((m)=>(m.id==props.match.params.id));
                  
                  return theMovie && <Alert variant='info'>
                    <Alert.Heading>
                      {`Detail for movie ${theMovie.title}`}
                    </Alert.Heading>
                    <p align='right'>
                      <Link to='/'>Close</Link>
                      </p>

                  </Alert>;
                }} />
                <Route>
                  <Link to='/add'>Add</Link>
                </Route>
              </Switch>
            </Route>


          </Switch>

        </Container>
      </Router>
    );
  }

  addMovie = async (movie) => {
    this.setState({ loading: true });
    await API.addMovie(movie);
    let movies = await API.loadMovies();
    this.setState({ movies: movies, loading: false });
  }

  deleteMovie = async (movieId) => {
    this.setState({ loading: true });
    await API.deleteMovie(movieId);
    let movies = await API.loadMovies();
    this.setState({ movies: movies, loading: false });
  }

}

export default App;
