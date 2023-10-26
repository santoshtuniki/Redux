// redux
const redux = require("redux");
const createStore = redux.legacy_createStore;
const applyMiddleware = redux.applyMiddleware;

// redux-thunk
const reduxThunk = require("redux-thunk").default;

// imports
const rootReducer = require("../Reducer/index");

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

module.exports = store;