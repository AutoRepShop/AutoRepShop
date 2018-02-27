const getAllEvents = function() {
    return JSON.parse(localStorage.getItem('localStorageEvents'));
};