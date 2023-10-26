const { ICECREAM_ORDERED, ICECREAM_RESTOCKED } = require("../constants");

const orderIceCream = (qty = 1) => {
    return {
        type: ICECREAM_ORDERED,
        payload: qty
    }
};

const restockIceCream = (qty = 1) => {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}

module.exports = {
    orderIceCream,
    restockIceCream
};