// Root Reducer
import {combineReducers} from "redux";
import cardItems from "./reducer";

const rootReducer = combineReducers({
    cardItems
});

export default rootReducer;