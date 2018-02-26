const addEvent = function AddEventToDatabase(eventsArr, event) {
    if (eventsArr !== null && typeof eventsArr != 'undefined') {
        eventsArr.push(event);
        localStorage.setItem('localStorageEvents', JSON.stringify(eventsArr));
    } else {
        debugger;
        var nextEventId = localStorage.getItem('nextEventId');
        if (typeof nextEventId == 'undefined' || nextEventId === 'null') {
            localStorage.setItem('nextEventId', 0);
        }

        localStorage.setItem('localStorageEvents', JSON.stringify([event]));
    }
};