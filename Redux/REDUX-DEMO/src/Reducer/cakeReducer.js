const { CAKE_ORDERED, CAKE_RESTOCKED } = require("../constants");

const initialCakeState = {
    numOfCakes: 10
};

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case CAKE_ORDERED: 
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.payload
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }
        default:
            return state
    }
};

module.exports = cakeReducer;