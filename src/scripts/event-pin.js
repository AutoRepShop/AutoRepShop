// Security related
const getEventPin = function(id) {
    // debugger;
    var number = (+id + 73).toString();
    var pin = `${'0'.repeat(4 - number.length)}${number}`;

    return pin;
};

const validatePin = function(eventID, PIN) {
    var actualPIN = getEventPin(eventID);

    return actualPIN === PIN;
};