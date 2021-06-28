import { createStore, combineReducers, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import cemeteryReducer from './reducers/cemeteryReducer'
import transactionReducer from './reducers/transactionReduccer'

const reducers = combineReducers({
    cemeteryReducer,
    transactionReducer
})

const middlewares = applyMiddleware(ReduxThunk)
const store = createStore(reducers, middlewares)
export default store