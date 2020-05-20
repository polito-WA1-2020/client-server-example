import React from 'react';

import Table from 'react-bootstrap/Table';

import MovieRow from './MovieRow';

function MovieTable(props) {
  return (
    <Table bordered>
      <thead>
        <tr>
          <th style={{ width: '70%' }}>Movie</th>
          <th style={{ width: '20%' }}>Score</th>
          <th style={{ width: '10%' }}>Action</th></tr>
      </thead>
      <tbody>
        {props.movies
          .sort((a, b) => (b.score - a.score))
          .map((movie) => (<MovieRow key={movie.id} movie={movie}
            deleteMovie={props.deleteMovie} />))}
      </tbody>

    </Table>
  );
}

export default MovieTable;