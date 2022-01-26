import React from 'react';
import MovieCard from './MovieCard';

function ListOfMovies({movies}) {
  return (
      <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around',marginTop:15}} >
          { movies.map(movie=> <MovieCard key={movie.id} title={movie.title} rate={movie.rate} description={movie.description} image={movie.posterUrl} /> ) }
      </div>
  );
}

export default ListOfMovies;
