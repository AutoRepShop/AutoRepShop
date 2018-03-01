const getEventId = function() {
    const eventId = localStorage.getItem('nextEventId');
    return eventId;
};