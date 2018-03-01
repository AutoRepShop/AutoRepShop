const eventHandler = {
    addEvent: function(eventsArr, event) {
        eventsArr.push(event);
        localStorage.setItem('localStorageEvents', JSON.stringify(eventsArr));
    },

    getAllEvents: function() {
        return JSON.parse(localStorage.getItem('localStorageEvents'));
    },

    getEventId: function() {
        const eventId = localStorage.getItem('nextEventId');
        return eventId;
    },

    updateEvent: function(updatedEvent) {
        const eventId = {
            id: updatedEvent.id
        };
        debugger;

        const allEvents = this.getAllEvents();

        allEvents.forEach(element => {
            var elementId = {
                id: element.id
            };

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
    }
};