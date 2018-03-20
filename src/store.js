import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'

const initialState = {
  header: 'This is header from state',
  paragraph: 'This is a paragraph from the state',
}

const AppReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'ACTION':
      return state
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
