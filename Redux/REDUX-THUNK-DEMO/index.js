// axios
const axios = require("axios");

// imports
const store = require("./src/Store/store");
const { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } = require("./src/Action/asyncAction");

// dispatch()
const fetchUsers = () => {
    return function(dispatch){
        dispatch(fetchUsersRequest());
        axios
            .get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                // response.data is the users
                const users = response.data.map((user) => user.id);
                dispatch(fetchUsersSuccess(users));
            })
            .catch(error => {
                // error.message is the error message
                dispatch(fetchUsersFailure(error.message));
            })
    } 
};

store.subscribe(() => {
    console.log(store.getState())
});

store.dispatch(fetchUsers());

