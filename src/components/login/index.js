import React, { Component } from 'react';

import LoginForm from  './form';

class Login extends Component {
  state = {
  isFetching: false,
  message: null,
  };
  submit = values => {
    this.props.actions
      .onLogin(values)
      .then(response => {
        this.setState({ isFetching: false, message: null}, () =>{
          this.props.history.push('/about')
        });
      })
      .catch(error => {
        this.setState({ isFetching: false, message: error});
      });
  };

  render() {
      const { isFetch, message } = this.state;
      return (
        <div className="Login Container">
        <h3 className="text-center">Login</h3>
        <LoginForm
        onSubmit={this.submit}
        isFetching={isFetching}
        message={message}
        />
        </div>
      )
  }
}

export default Login