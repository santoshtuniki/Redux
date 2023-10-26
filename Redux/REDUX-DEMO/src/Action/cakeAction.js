const { CAKE_ORDERED, CAKE_RESTOCKED } = require("../constants");

const orderCake = (qty = 1) => {
    return {
        type: CAKE_ORDERED,
        payload: qty
    }
};

const restockCake = (qty = 1) => {
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
}

module.exports = {
    orderCake,
    restockCake
};