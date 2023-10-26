const store = require("./app/store");
const { cakeActions } = require("./features/cake/cakeSlice");
const { icecreamActions } = require("./features/icecream/icecreamSlice");

console.log('Initial state: ', store.getState());

// const unsubscribe = store.subscribe(() => {})
const unsubscribe = store.subscribe(() => {
    console.log('Updated state: ', store.getState())
})


store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(4));

console.log('//////////////////////////////////////////////////////////////////////////////////')

store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.ordered());
store.dispatch(icecreamActions.restocked(5));

unsubscribe();