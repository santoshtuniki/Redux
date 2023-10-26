const redux = require("redux");
const combineReducers = redux.combineReducers;

const fetchReducer = require("./asyncReducer");

const rootReducer = combineReducers({
    fetch: fetchReducer
});

module.exports = rootReducer;