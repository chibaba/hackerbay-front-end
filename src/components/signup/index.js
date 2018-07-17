import React, { Component } from 'react';


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
      this.setState({ isFetching: false, message: error});
    });
  };
}