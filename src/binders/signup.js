import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import SignUp from '../components/signup';

import { onSignUp } from '../actions/index';

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ onSignUp }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);