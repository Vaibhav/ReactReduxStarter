import { connect } from 'react-redux';
import App from './App';

const ACTION_CREATORS = {}; //dispatch props

function mapStateToProps(state) {
  return {
    header: state.app.header,
    para: state.app.paragraph,
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  console.log(stateProps);
  return {
    header: stateProps.header,
    para: stateProps.para,
  };
}

export default connect(mapStateToProps, ACTION_CREATORS, mergeProps)(App);