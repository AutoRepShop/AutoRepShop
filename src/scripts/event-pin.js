// Security related
const getEventPin = function(id) {
    // debugger;
    var number = (+id + 73).toString();
    var pin = `${'0'.repeat(4 - number.length)}${number}`;

    return pin;
};

const validatePin = function(eventID) {
    var PIN = prompt('Please enter PIN in order to change or view this event');
    var actualPIN = getEventPin(eventID);

    if (PIN === null) {
        return false;
    }
    if (PIN !== actualPIN) {
        alert('PIN is not correct, please try again');
        return false;
    }
    return true;
};