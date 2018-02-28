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
            element.clientName = updatedEvent.clientName;
            element.tel = updatedEvent.tel;
            element.vehicle = updatedEvent.vehicle;
            element.description = updatedEvent.description;
            
            localStorage.setItem('localStorageEvents', JSON.stringify(allEvents));

            return;
        }
    });
};