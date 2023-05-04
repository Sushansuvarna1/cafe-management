import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import orderReducers from "../reducers/orderReducers"

const configStore = () => {
  const store = createStore(combineReducers({
    order: orderReducers
  }), applyMiddleware(thunk))
  return store
}

export default configStore