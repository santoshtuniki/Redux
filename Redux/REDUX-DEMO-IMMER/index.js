const redux = require("redux");
const bindActionCreators = redux.bindActionCreators;

const store = require("./src/Store/store");
const { updatedStreet } = require("./src/Action/streetAction");

console.log('initial state: ', store.getState());

const unsubscibe = store.subscribe(() => 
    console.log('updated state: ', store.getState())
);

const actions = bindActionCreators({ updatedStreet }, store.dispatch);

console.log('******************************************************');
actions.updatedStreet('Housing Board');

unsubscibe();