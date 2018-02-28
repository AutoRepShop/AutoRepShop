function saveEventModalInfo(event, typeOfAction) {
    // Get the modal
    var modal = document.getElementById('myModal');

    document.getElementById("save-event").addEventListener("click", function() {
    
        if (typeOfAction === 'edit') {
            $('#title').val(event.title);
            $('#starts-at').val(event.start);
            $('#ends-at').val(event.end);
            $('#clientName').val(event.clientName);
            $('#telephone').val(event.tel);
            $('#vehicle').val(event.vehicle);
            $('#description').val(event.description);
        }

        //save info in localStorage

        event.title = $('#title').val();
        event.start = $('#starts-at').val();
        event.end = $('#ends-at').val();
        event.clientName = $('#clientName').val();
        event.tel = $('#telephone').val();
        event.vehicle = $('#vehicle').val();
        event.description = $('#description').val();

        if (typeOfAction === 'new') {
            addEvent(getAllEvents(), event);
        } else if (typeOfAction === 'edit') {
            // update events in localStorage
            $('#eventModalId').val('Edit Appointment');
            updateEvent(event);
        }

        // $.get('/src/scripts/calendar.js');
        // $('#calendar').fullCalendar({
        // events: getAllEvents()
        // });

        // calendar.eventC= getAllEvents();
        // //close the modal
        modal.style.display = "none";


        // $('#calendar').fullCalendar('removeEventSource', getAllEvents());
        // $('#calendar').fullCalendar('addEventSource', getAllEvents());
        // $('#calendar').fullCalendar({
        //     // select: function(start, end, jsEvent, view) {
        //     //     // Ask for a title. If empty it will default to 'New event'

        //     //     var title = prompt('Enter a title for this event', 'New event');

        //     //     // If did not pressed Cancel button
        //     //     if (title != null) {
        //     //         // Create event
        //     //         var event = {
        //     //             id: getEventId(),
        //     //             title: title.trim() !== '' ? title : 'New event',
        //     //             start: start,
        //     //             end: end,
        //     //             color: 'red'
        //     //         };

        //     //         // Push event into fullCalendar's array of events
        //     //         // and displays it. The last argument is the
        //     //         // 'stick' value. If set to true the event
        //     //         // will 'stick' even after you move to other
        //     //         // year, month, day or week.


        //     calendar.fullCalendar('renderEvent', event, true);
        //     addEvent(getAllEvents(), event);

        // };
        // }
        // });

        location.reload();


    });


};

