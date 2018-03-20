import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'

const initialState = {}

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
