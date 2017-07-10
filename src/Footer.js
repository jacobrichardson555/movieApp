import React from 'react';

class Footer extends React.Component {

  render(){
    return(
      <footer>
        <div className='footer'>
          <a href='https://www.themoviedb.org/?language=en'><img src={require('./img/logo.png')} alt='logo' width='150' className='tmdb-logo'/></a>
          <a href='http://jacobrichardsonsportfolio.com/'><p>&copy; Jacob Richardson 2017</p></a>
          <a href='https://www.facebook.com/jacob.richardson.399?pnref=about.overview.rel'><img src={require('./img/fb-logo.png')} alt='facebook logo' width='60' className='fb-logo'/></a>
        </div>
      </footer>
    )
  }
}

export default Footer;
