const updateEvent = function UpdateEventToDatabase(currentEvent, updatedEvent) {

    const currentEventId = {
        id: currentEvent.id
    };

    const allEvents = getAllEvents();

    allEvents.forEach(element => {
        var elementId = {
            id: element.id
        };

        // alert("elementId: " + elementId.id + "     " + "currentEventId: " + currentEventId.id);

        if (elementId.id === currentEventId.id) {

            element.title = updatedEvent.title;
            element.start = updatedEvent.start;
            element.end = updatedEvent.end;

            localStorage.setItem("localStorageEvents", JSON.stringify(allEvents));

            return;
        }
    });
};
