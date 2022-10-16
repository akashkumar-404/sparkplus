import  { applyMiddleware, legacy_createStore } from "redux"
import Appreducer from "./reducer"
import thunk  from "redux-thunk"

const store=legacy_createStore(Appreducer,applyMiddleware(thunk))
export {store}