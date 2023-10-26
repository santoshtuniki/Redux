const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
const axios = require('axios');

const initialState = {
    loading: false,
    users: [],
    error: ''
};

/*
    createAsyncThunk(type, payloadCreator)
        -   Returns a standard Redux thunk action creator.
                -->   fetchUsers.pending   dispatches an 'user/fetchUsers/pending' action
                -->   fetchUsers.fulfilled  dispatches an 'user/fetchUsers/fulfilled' action
                -->   fetchUsers.rejected   dispatches an 'user/fetchUsers/rejected' action
*/
const fetchUsers = createAsyncThunk('user/fetchUsers', () => {
    return axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(response => response.data.map(user => user.id))
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // reducers
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false
            state.users = action.payload
            state.error = ''
        })
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false
            state.users = []
            state.error = action.error.message 
        })
    }
});

module.exports = userSlice.reducer;

module.exports.fetchUsers = fetchUsers;