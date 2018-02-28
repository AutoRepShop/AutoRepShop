const updateEvent = function(event, delta, revertFunc, message) {
    function UpdateEventToDatabase(currentEvent, updatedEvent) {
        const currentEventId = {
            id: updatedEvent.id
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

                localStorage.setItem('localStorageEvents', JSON.stringify(allEvents));

                return;
            }
        });
    }

    if (validatePin(event.id) && confirm(message)) {
        const currentEvent = {
            id: event.id,
            title: event.title,
            start: event.start - delta,
            end: event.end - delta
        };
        UpdateEventToDatabase(currentEvent, event);

        return;
    }

    revertFunc();
};