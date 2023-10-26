import { ADD_TO_CART, REMOVE_TO_CART } from "../constants";

const addToCart = (data) => {
    return {
        type: ADD_TO_CART,
        data: data
    }
};

const removeToCart = (data) => {
    return {
        type: REMOVE_TO_CART,
        data: data
    }
};

export {
    addToCart, 
    removeToCart
};