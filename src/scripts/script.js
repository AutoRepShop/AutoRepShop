//an IIFE to initialize empty 'database'
//in localStorage if nothing is found
(function() {
    var eventsArr = localStorage.getItem('localStorageEvents');
    if (eventsArr == null) {
        localStorage.setItem('localStorageEvents', JSON.stringify([]));
    }

    var nextEventId = localStorage.getItem('nextEventId');
    if (nextEventId == null) {
        localStorage.setItem('nextEventId', 0);
    }

    var feedbackData = localStorage.getItem('feedbackData');
    if (feedbackData == null) {
        localStorage.setItem('feedbackData', JSON.stringify([]));
    }
})();