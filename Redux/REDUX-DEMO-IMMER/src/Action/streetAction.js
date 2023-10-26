const { STREET_UPDATED } = require("../constants");

const updatedStreet = (street) => {
    return {
        type: STREET_UPDATED,
        payload: street
    }
};

module.exports = {
    updatedStreet
};