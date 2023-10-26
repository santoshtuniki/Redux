const redux = require("redux");
const bindActionCreators = redux.bindActionCreators;

const store = require("./src/Store/store");
const { orderCake, restockCake } = require("./src/Action/cakeAction");
const { orderIceCream, restockIceCream} = require("./src/Action/iceCreamAction");

console.log('initial state: ', store.getState());

const unsubscibe = store.subscribe(() => 
    console.log('updated state: ', store.getState())
);

const actions = bindActionCreators({ orderCake, restockCake, orderIceCream, restockIceCream }, store.dispatch);

console.log('******************************************************');
actions.orderCake();
actions.orderCake(3);

actions.restockCake(5);

console.log('******************************************************');
actions.orderIceCream();
actions.orderIceCream(2);

actions.restockIceCream(4);

unsubscibe();
/*
    initial state:  { numOfCakes: 10, anotherProperty: 0 }
    *******************************************************
    updated state:  { numOfCakes: 9, anotherProperty: 0 }
    updated state:  { numOfCakes: 8, anotherProperty: 0 }
    updated state:  { numOfCakes: 7, anotherProperty: 0 }
    *******************************************************
    updated state:  { numOfCakes: 10, anotherProperty: 0 }
*/