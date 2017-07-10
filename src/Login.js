import React from 'react';

class Login extends React.Component{

  render(){
    if(this.props.title === 'Log in'){
      return(
          <div className='login-wrapper'>
            <h1>{this.props.title}</h1>
            <span className='close' onClick={this.props.close}>X</span>
            <form action="{this.props.title}.php" method='post'>
              <input name='username' placeholder='username' />
              <input name='password' placeholder='password' />
              <button type='submit'>Submit</button>
            </form>
          </div>
      )
    } else {
      return(
          <div className='login-wrapper'>
            <h1>{this.props.title}</h1>
            <span className='close' onClick={this.props.close}>X</span>
            <form action="{this.props.title}.php" method='post'>
              <input name='email' placeholder='email' />
              <input name='username' placeholder='username' />
              <input name='password' placeholder='password' />
              <button type='submit'>Submit</button>
            </form>
          </div>
      )
    }
  }
}

export default Login;
