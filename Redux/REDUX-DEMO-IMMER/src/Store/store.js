const redux = require("redux");
const createStore = redux.legacy_createStore;

const rootReducer = require("../Reducer/index");

const store = createStore(rootReducer);

module.exports = store;