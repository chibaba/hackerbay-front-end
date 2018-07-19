import React, { Component } from 'react';

import LoginForm from  './form';

class Login extends Component {
  state = {
  isFetch: false,
  message: null,
  };
  submit = values => {
    this.props.actions
      .onLogin(values)
      .then(response => {
        this.setState({ isFetch: false, message: null}, () =>{
          this.props.history.push('/about')
        });
      })
      .catch(error => {
        this.setState({ isFetch: false, message: error});
      });
  };

  render() {
      const { isFetch, message } = this.state;
      return (
        <div className="Login Container">
        <h3 className="text-center">Login</h3>
        <LoginForm
        onSubmit={this.submit}
        isFetch={isFetch}
        message={message}
        />
        </div>
      )
  }
}

export default Login