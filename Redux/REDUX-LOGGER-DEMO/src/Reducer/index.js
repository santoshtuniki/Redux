const redux = require("redux");
const combineReducers = redux.combineReducers;

const cakeReducer = require("./cakeReducer");
const iceCreamReducer = require("./iceCreamReducer");

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});

module.exports = rootReducer;