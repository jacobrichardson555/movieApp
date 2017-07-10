import React from 'react';

class Header extends React.Component {

  handleChange(e){
    let val = e.target.value;
    this.props.resetPage(val);
    this.props.updateList(val);
    this.props.updateValue(val);
  }

  render(){
    return(
      <header>
        <a href='https://www.themoviedb.org/?language=en'><img src={require('./img/logo.png')} alt='movie logo' width='150'/></a>
        <h1>{this.props.header}</h1>
        <div className='search'>
          <input type='text' placeholder='Search...' onChange={this.handleChange.bind(this)} />
        </div>
      </header>
    )
  }
}

export default Header;
