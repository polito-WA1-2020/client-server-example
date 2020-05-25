import React from 'react';

import trash from 'bootstrap-icons/icons/trash.svg';
import star from 'bootstrap-icons/icons/star.svg';
import eye from 'bootstrap-icons/icons/eye.svg';


import { Link, NavLink } from 'react-router-dom' ;

function MovieRow(props) {
  return (
    <tr>
      <td>{props.movie.title} ({props.movie.id})</td>
      <td>{stars(props.movie.score)}</td>
      <td>
        <span className='btn btn-light' onClick={()=>props.deleteMovie(props.movie.id)}><img   src={trash} alt='Delete' title='Delete'/></span>{' '}
        <NavLink className='btn btn-light' to={`/detail/${props.movie.id}`}><img className='active' src={eye} alt='Details' title='Details'/></NavLink>
      </td>
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