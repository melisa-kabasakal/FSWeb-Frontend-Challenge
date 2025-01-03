import { createStore, applyMiddleware, combineReducers } from "redux"
import { thunk } from "redux-thunk"
import { reducer } from "./reducer"

const combineReducer = combineReducers({
    footer: reducer,
})

export const myStore = createStore(combineReducer, applyMiddleware(thunk))