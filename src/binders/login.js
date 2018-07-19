import connect from 'react-redux';

import { bindActionCreators } from 'redux';

import Login from '../components/signUp';

import onLogin from '../actions/auth';

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ onLogin }, dispatch),
  };
}



export default connect(
 // mapStateToProps,
  mapDispatchToProps
)(Login);