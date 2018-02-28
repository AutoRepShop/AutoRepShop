const updateEvent = function UpdateEventToDatabase(updatedEvent) {
    const eventId = {
        id: updatedEvent.id
    };

    const allEvents = getAllEvents();

    allEvents.forEach(element => {
        var elementId = {
            id: element.id
        };

        // alert("elementId: " + elementId.id + "     " + "currentEventId: " + currentEventId.id);

        if (elementId.id === eventId.id) {

            element.title = updatedEvent.title;
            element.start = updatedEvent.start;
            element.end = updatedEvent.end;
            event.clientName = updatedEvent.clientName;
            event.tel = updatedEvent.tel;
            event.vehicle = updatedEvent.vehicle;
            event.description = updatedEvent.description;

            localStorage.setItem('localStorageEvents', JSON.stringify(allEvents));

            return;
        }
    });
};