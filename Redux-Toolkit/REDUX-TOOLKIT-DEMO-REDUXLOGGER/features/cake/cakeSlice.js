const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
    numOfCakes: 10
};

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfCakes--
        },
        restocked: (state, action) => {
            state.numOfCakes += action.payload
        }
    }
});

// reducer as default exports
module.exports = cakeSlice.reducer;

// actions as named exports
module.exports.cakeActions = cakeSlice.actions;