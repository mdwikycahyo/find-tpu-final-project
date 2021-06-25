import {createStore, combineReducers, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk'

const reducers = combineReducers({})

const middlewares = applyMiddleware(ReduxThunk)
const store = createStore(reducers, middlewares)
export default store