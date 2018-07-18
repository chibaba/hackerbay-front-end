import React, { Component } from 'react';

import LoginForm from '../login/Form';


class  Signup extends Component {
  state = {
    isFetch: false,
    message: null
  };

  submit = values => {
    this.props.actions
    .onSignUp(values)
    .then(response => {
      this.setState({isFetch: false, message: null },   () => {
        this.props.history.push('/about')
      });
    })
    .catch(error => {
      this.setState({ isFetch: false, message: error});
    });
  };
  render () {
    const { isFetch, message } = this.state;
    return ( <div className="login container">
    <h4 className="text-center">SignUp</h4>
    <LoginForm onSubmit={this.submit}
    submitLabel="signUp"
    isFetching={isFetching}
    message={message}
    />

      </div>
      );
  }
};

 export default Signup