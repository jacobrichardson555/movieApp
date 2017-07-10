import React from 'react';

class Rating extends React.Component {

  render(){
    var rate;

    if(this.props.rating === 1){
      rate = (
        <div>
          <img src={require('./img/star.png')} alt={this.props.alt} width='20' />
          <img src={require('./img/star-outline.png')} alt={this.props.alt} width='20' />
          <img src={require('./img/star-outline.png')} alt={this.props.alt} width='20' />
          <img src={require('./img/star-outline.png')} alt={this.props.alt} width='20' />
          <img src={require('./img/star-outline.png')} alt={this.props.alt} width='20' />
        </div>
      );
    }else if(this.props.rating === 2){
      rate = (
        <div>
          <img src={require('./img/star.png')} alt={this.props.alt} width='20' />
          <img src={require('./img/star.png')} alt={this.props.alt} width='20' />
          <img src={require('./img/star-outline.png')} alt={this.props.alt} width='20' />
          <img src={require('./img/star-outline.png')} alt={this.props.alt} width='20' />
          <img src={require('./img/star-outline.png')} alt={this.props.alt} width='20' />
        </div>
      );
    }else if(this.props.rating === 3){
      rate = (
        <div>
          <img src={require('./img/star.png')} alt={this.props.alt} width='20' />
          <img src={require('./img/star.png')} alt={this.props.alt} width='20' />
          <img src={require('./img/star.png')} alt={this.props.alt} width='20' />
          <img src={require('./img/star-outline.png')} alt={this.props.alt} width='20' />
          <img src={require('./img/star-outline.png')} alt={this.props.alt} width='20' />
        </div>
      );
    }else if(this.props.rating === 4){
      rate = (
        <div>
          <img src={require('./img/star.png')} alt={this.props.alt} width='20' />
          <img src={require('./img/star.png')} alt={this.props.alt} width='20' />
          <img src={require('./img/star.png')} alt={this.props.alt} width='20' />
          <img src={require('./img/star.png')} alt={this.props.alt} width='20' />
          <img src={require('./img/star-outline.png')} alt={this.props.alt} width='20' />
        </div>
      );
    }else if(this.props.rating === 5){
      rate = (
        <div>
          <img src={require('./img/star.png')} alt={this.props.alt} width='20' />
          <img src={require('./img/star.png')} alt={this.props.alt} width='20' />
          <img src={require('./img/star.png')} alt={this.props.alt} width='20' />
          <img src={require('./img/star.png')} alt={this.props.alt} width='20' />
          <img src={require('./img/star.png')} alt={this.props.alt} width='20' />
        </div>
      );
    }

    return rate;
  }
}

export default Rating;
