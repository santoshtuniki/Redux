const { FETCH_USERS_REQUESTED, FETCH_USERS_SUCCEEDED, FETCH_USERS_FAILED } = require("../constants");

const initialState = {
    loading: true,
    users: [],
    error: ''
}

const fetchReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_USERS_REQUESTED: 
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCEEDED:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case FETCH_USERS_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
};

module.exports = fetchReducer;