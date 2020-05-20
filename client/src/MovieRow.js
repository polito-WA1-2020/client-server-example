import React from 'react';

import trash from 'bootstrap-icons/icons/trash.svg';
import star from 'bootstrap-icons/icons/star.svg';


function MovieRow(props) {
  return (
    <tr>
      <td>{props.movie.title} ({props.movie.id})</td>
      <td>{stars(props.movie.score)}</td>
      <td><img onClick={()=>props.deleteMovie(props.movie.id)} src={trash} alt='delete'/></td>
      </tr>
  );
}

function stars(n) {
  let sts = [] ;
  for(let i = 0; i<n; i++) {
    sts.push(<img key={i} src={star} alt="*"/>);
  }
  return sts;
}

export default MovieRow;