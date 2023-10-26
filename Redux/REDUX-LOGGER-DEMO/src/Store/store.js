// redux
const redux = require("redux");
const createStore = redux.legacy_createStore;
const applyMiddleware = redux.applyMiddleware;

// redux-logger
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

// imports
const rootReducer = require("../Reducer/index");

const store = createStore(rootReducer, applyMiddleware(logger));

module.exports = store;