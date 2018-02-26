const getEventId = function() {
    const eventId = localStorage.getItem('nextEventId');
    localStorage.setItem('nextEventId', JSON.stringify(parseInt(eventId) + 1));
    return eventId;
};