import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import { Map } from 'immutable';

const initialState = new Map({
  header: 'This is header from state',
  paragraph: 'This is a paragraph from the state',
});

const AppReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'CHANGE_PARAGRAPH':
      return state.set('paragraph', action.data);
    default:
      return state
  }
}

export default createStore(
  combineReducers({
    app: AppReducer
  }),
  compose(applyMiddleware(ReduxThunk), window.devToolsExtension ? window.devToolsExtension() : f => f)
)
