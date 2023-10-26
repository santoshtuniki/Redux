const store = require("./src/Store/store");
const { orderCake, restockCake } = require("./src/Action/action");

console.log('initial state: ', store.getState());

const unsubscibe = store.subscribe(() => 
    console.log('updated state: ', store.getState())
);
// unsubscibe();
/* 
    if we call unsubscibe() before dispatch, the updates won't be logged
    initial state:  { numOfCakes: 10, anotherProperty: 0 } 
*/

console.log('******************************************************');

store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake()); 

console.log('******************************************************');

store.dispatch(restockCake());
store.dispatch(restockCake(3));


unsubscibe();
/*
    initial state:  { numOfCakes: 10, anotherProperty: 0 }
    *******************************************************
    updated state:  { numOfCakes: 9, anotherProperty: 0 }
    updated state:  { numOfCakes: 8, anotherProperty: 0 }
    updated state:  { numOfCakes: 7, anotherProperty: 0 }
    *******************************************************
    updated state:  { numOfCakes: 8, anotherProperty: 0 }
    updated state:  { numOfCakes: 11, anotherProperty: 0 }
*/