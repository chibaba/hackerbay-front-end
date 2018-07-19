import connect from 'react-redux';

import { bindActionCreators } from 'redux';

import SignUp from '../components/signUp';

import onSignUp from '../actions/auth';

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ onSignUp }, dispatch),
  };
}

export default connect(
//  mapStateToProps,
  mapDispatchToProps
)(SignUp);