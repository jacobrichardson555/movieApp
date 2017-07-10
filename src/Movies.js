import React from 'react';

class Movies extends React.Component{

handleClick(i){
  let movie = this.props.titles;
  console.log(movie[i]);
  this.props.handleClick(movie[i]);
}

  render(){

    return(
      <div className='movie-wrapper'>
          {this.props.titles.map((movie, i) => (
            <div className='movie' key={i} >
              <img src={"https://image.tmdb.org/t/p/w300/" + movie.poster_path} alt={movie.title} width='200' height='300' onClick={() => {this.handleClick(i)}}/>
              <span>{movie.vote_average}&nbsp;/&nbsp;10&nbsp;&nbsp;</span>
              <img src={require('./img/star.png')} alt='star' width='20' />
            </div>
            ))}
      </div>
    );
  }
}

export default Movies;
