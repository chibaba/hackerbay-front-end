
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Login from '../../components/login';

import  { login }   from '../../actions';

const mapStateToProps = state => ({
  loginFormData: state.loginReducer
});

const mapDispatchToProps = dispatch => ({
  login: (data) => dispatch(login(data))
});

type Props = {
  login: Function
};

class LoginContainer extends Component<Props> {
  login = (values) => {
    const { login: loginHandler } = this.props;
    loginHandler(values);
  };

  render() {
    return (
      <Login {...this.props} onSubmit={this.login}/>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);