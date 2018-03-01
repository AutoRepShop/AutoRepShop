// Security related
const validationsHandler = {
    getEventPin: function(id) {
        var number = (+id + 100).toString();
        var pin = `${'0'.repeat(4 - number.length)}${number}`;

        return pin;
    },

    validatePin: function(eventID) {
        debugger;
        while (true) {
            var PIN = prompt('Please enter PIN in order to change or view this event');
            var actualPIN = this.getEventPin(eventID);

            if (PIN === null) {
                return false;
            }
            if (PIN !== actualPIN && PIN !== 'admin') {
                alert('PIN is not correct, please try again');
                continue;
            }
            return true;
        }
    }
};