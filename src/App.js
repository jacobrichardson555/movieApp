import React, { Component } from 'react';
import $ from 'jquery';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Movies from './Movies';
import movies from './MovieList';
import Modal from './Modal';


class App extends Component {



  constructor(props){
    super(props);
    this.updateList = this.updateList.bind(this)
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.state = {
      movies: movies,
      login: '',
      header: 'Popular',
      movie: {},
      page: 1,
      value: '',
    }
  }

  componentDidMount(){

    let url = 'https://api.themoviedb.org/3/discover/movie?api_key=6923363bff93519e1994961e935b25b1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=' + this.state.page;
    let that = this;
    $.getJSON(url).done(function(data){

     that.setState({
       movies: data.results,
     })
  });

  }

  updateValue(val){
      this.setState({
        value: val,
        header: val,
      });
      if(!val){
        this.setState({
          header: 'Popular',
        })
      }
  }

  increment(){
    let val = this.state.value;
    console.log(val);
    this.setState({
      page: this.state.page + 1,
    }, function(){
      this.updateList(val);
    })
  }

  decrement(){
    let val = this.state.value;
    console.log(val);
    this.setState({
      page: this.state.page - 1,
    }, function(){
        this.updateList(val);
    })
    if(this.state.page <= 1){
      this.setState({
        page: 1,
      }, function(){
          this.updateList('');
      })
    }

  }

  updateList(val){
    let page = this.state.page;
    let value = val;
    let url = 'https://api.themoviedb.org/3/search/movie?api_key=6923363bff93519e1994961e935b25b1&page=' + page + '&query=';
    let that = this;
    $.getJSON(url + value).done(function(data){
     that.setState({
       movies: data.results,
     })
  });
    if(value.length <= 0 || value === ''){
      let url = 'https://api.themoviedb.org/3/discover/movie?api_key=6923363bff93519e1994961e935b25b1&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=' + page;

      let that = this;
      $.getJSON(url).done(function(data){

         that.setState({
           movies: data.results,
         })
      });
    }
  }

  updateMovie(title){
    this.setState({
      movie: title,
    })
    $('.outer').css({
      display: 'table-cell',
      background: "url('https://image.tmdb.org/t/p/w500/' + this.state.movie.backdrop_path)",
  });

  }

  reset(val){
    this.setState({
      page: 1,
    }, function(){
      this.updateList(val)
    })
  }

  closeModal(){
    $('.outer').css({
      display: 'none',
    })
  }

  render() {
    return (
      <div className="App">
        <Header header={this.state.header} updateList={this.updateList.bind(this)} resetPage={this.reset.bind(this)} updateValue={this.updateValue.bind(this)}/>
        <div className='arrows'>
          <h1><span onClick={this.decrement.bind(this)}>&lt; &nbsp;</span>page: {this.state.page}&nbsp;<span onClick={this.increment}>&gt;</span></h1>
        </div>
        <Movies titles={this.state.movies} handleClick={this.updateMovie.bind(this)}/>
        <div className='arrows'>
          <h1><span onClick={this.decrement.bind(this)}>&lt; &nbsp;</span>page: {this.state.page}&nbsp;<span onClick={this.increment}>&gt;</span></h1>
        </div>
        <Modal movie={this.state.movie} close={this.closeModal} />
        <Footer titles={this.state.movies} />
      </div>
    );
  }
}

export default App;
