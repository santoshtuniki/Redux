const redux = require("redux");
const combineReducers = redux.combineReducers;

const streetReducer = require("./streetReducer");

const rootReducer = combineReducers({
    street: streetReducer
});

module.exports = rootReducer;