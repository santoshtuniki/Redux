const { STREET_UPDATED } = require("../constants");
const produce = require("immer").produce;

const initialState = {
    name: 'Santosh',
    address: {
        street: 'Thulasinagar',
        city: 'Jagtial',
        state: 'Telangana'
    }
};

const streetReducer = (state = initialState, action) => {
    switch(action.type){
        case STREET_UPDATED: 
            return produce(state, (draft) => {
                draft.address.street = action.payload
            })
        default:
            return state
    }
};

module.exports = streetReducer;

/*

    // *************** without IMMER ********************

    const streetReducer = (state = initialState, action) => {
        switch(action.type){
            case STREET_UPDATED: 
                return {
                    ...state,
                    address: {
                        ...state.address,
                        street: action.payload
                    }
                }
            default:
                return state
        }
    };

*/