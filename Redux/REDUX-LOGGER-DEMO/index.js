// redux
const redux = require("redux");
const bindActionCreators = redux.bindActionCreators;

// imports
const store = require("./src/Store/store");
const { orderCake, restockCake } = require("./src/Action/cakeAction");
const { orderIceCream, restockIceCream} = require("./src/Action/iceCreamAction");

// state
console.log('initial state: ', store.getState());

const unsubscibe = store.subscribe(() => {});

// dispatch()
const actions = bindActionCreators({ orderCake, restockCake, orderIceCream, restockIceCream }, store.dispatch);

console.log('******************************************************');
actions.orderCake();

console.log('******************************************************');
actions.orderCake(3);

console.log('******************************************************');
actions.restockCake(5);

console.log('******************************************************');
actions.orderIceCream();

console.log('******************************************************');
actions.orderIceCream(2);

console.log('******************************************************');
actions.restockIceCream(4);

unsubscibe();