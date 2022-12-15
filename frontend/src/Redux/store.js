import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer } from "./reducer";
import { reducer as AppReducer } from "./AppReducer/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ AppReducer, reducer });

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
