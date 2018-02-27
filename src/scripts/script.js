(function() {
    var eventsArr = localStorage.getItem('localStorageEvents');

    if (eventsArr === null) {
        localStorage.setItem('localStorageEvents', JSON.stringify([]));
    }

    var nextEventId = localStorage.getItem('nextEventId');

    if (typeof nextEventId === 'undefined' || nextEventId == null) {
        localStorage.setItem('nextEventId', 0);
    }
})();