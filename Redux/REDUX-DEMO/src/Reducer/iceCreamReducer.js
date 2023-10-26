const { ICECREAM_ORDERED, ICECREAM_RESTOCKED } = require("../constants");

const initialIceCreamState = {
    numOfIceCreams: 20
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type){
        case ICECREAM_ORDERED: 
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numOfIceCreams: state.numOfIceCreams + action.payload
            }
        default:
            return state
    }
};

module.exports = iceCreamReducer;