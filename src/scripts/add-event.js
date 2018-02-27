const addEvent = function AddEventToDatabase(eventsArr, event) {
    eventsArr.push(event);
    localStorage.setItem('localStorageEvents', JSON.stringify(eventsArr));
};