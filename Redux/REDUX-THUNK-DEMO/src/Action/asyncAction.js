const { FETCH_USERS_REQUESTED, FETCH_USERS_SUCCEEDED, FETCH_USERS_FAILED } = require("../constants");

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUESTED
    }
};

const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users
    }
}

const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error
    }
}

module.exports = {
    fetchUsersRequest,
    fetchUsersSuccess,
    fetchUsersFailure
};