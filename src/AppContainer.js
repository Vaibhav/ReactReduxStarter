import { connect } from 'react-redux';
import App from './App';
import { changeParagraph } from './ActionCreators';


const ACTION_CREATORS = {
  changeParagraph,
}; //dispatch props

function mapStateToProps(state) {
  return {
    header: state.app.get('header'),
    para: state.app.get('paragraph'),
  };
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  console.log(stateProps);
  return {
    header: stateProps.header,
    para: stateProps.para,
    clickHandler: dispatchProps.changeParagraph,
  };
}

export default connect(mapStateToProps, ACTION_CREATORS, mergeProps)(App);