import { legacy_createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
import thunk from "redux-thunk";

const store = legacy_createStore(
    reducers, 
    {},
    applyMiddleware(thunk)
);

export default store;