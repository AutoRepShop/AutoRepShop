    const addEvent = function AddEventToDatabase(eventsArr, event) {

        if (eventsArr !== null && typeof eventsArr != 'undefined') {
            eventsArr.push(event);
            localStorage.setItem("localStorageEvents", JSON.stringify(eventsArr));
        } else {
            localStorage.setItem("localStorageEvents", JSON.stringify([event]));
        }
    };
