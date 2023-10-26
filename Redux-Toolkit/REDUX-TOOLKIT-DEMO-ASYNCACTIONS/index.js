const store = require("./app/store");
const { fetchUsers } = require("./features/user/userSlice");

console.log('Initial state: ', store.getState());

// const unsubscribe = store.subscribe(() => {})
const unsubscribe = store.subscribe(() => {
    console.log('Updated state: ', store.getState())
})

store.dispatch(fetchUsers());

// unsubscribe() ;