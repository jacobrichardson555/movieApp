import React from 'react';

class Modal extends React.Component{

  render(){
    let imgurl = this.props.movie.backdrop_path;
    let style = {
      backgroundImage: 'url(https://image.tmdb.org/t/p/w780/' + imgurl + ')',
      color: "#fff",
    }
    return(
      <div className='outer' style={style}>
        <div className='inner'>
          <h1>{this.props.movie.title}</h1>
          <div onClick={this.props.close}>X</div>
          <img src={"https://image.tmdb.org/t/p/w342/" + this.props.movie.poster_path} alt={this.props.movie.title} />
          <h2>{this.props.movie.overview}<br/><br/></h2>
          <h2>Release Date: {this.props.movie.release_date}<br/><br/></h2>
          <h2>Rating: {this.props.movie.vote_average}<br/><br/></h2>
        </div>
      </div>
    )
  }
}

export default Modal;
