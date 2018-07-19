import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import Login from '../components/login';

import { onLogin } from '../actions/index';

function mapStateToProps () {
  return {}
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ onLogin }, dispatch),
  };
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);