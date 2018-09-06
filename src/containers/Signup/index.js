// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Signup from '../../components/signup';

import { signup } from '../../actions';

const mapStateToProps = state => ({
  signupFormData: state.signupReducer
});

const mapDispatchToProps = dispatch => ({
  signup: (data) => dispatch(signup(data))
});

type Props = {
  signup: Function
};

class SignupContainer extends Component<Props> {
  signup = values => {
    const { signup: signupHandler } = this.props;
    signupHandler(values);
  };

  render() {
    return (
      <Signup {...this.props} onSubmit={this.signup} />
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupContainer);