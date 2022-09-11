import { configureStore, combineReducers, applyMiddleware } from "@reduxjs/toolkit";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { listReducer } from "./reducer";

const reducer = combineReducers({
    todoItems: listReducer
})

const middleware = [thunk]


const todoItemsFromStorage = localStorage.getItem('listItems') ? JSON.parse(localStorage.getItem('listItems', listReducer )) : [];


const initState = {
    todoItems: {todoItemsFromStorage}
}

const store = configureStore({ reducer: reducer }, initState, composeWithDevTools(applyMiddleware(...middleware)))
export default store