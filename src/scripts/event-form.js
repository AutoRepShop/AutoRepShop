function saveEventModalInfo(event, typeOfAction) {
    // Get the modal
    var modal = document.getElementById('myModal');

    document.getElementById("save-event").addEventListener("click", function() {

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
            updateEvent(event);
        }

        // $.get('/src/scripts/calendar.js');
        // $('#calendar').fullCalendar({
        // events: getAllEvents()
        // });

        // calendar.eventC= getAllEvents();
        // //close the modal

        // while ((validate() === 'problem')
        // {


        // }
        if (validate() !== 'problem') {
            modal.style.display = "none";
            location.reload();

        }
        //  else {
        //     validate()
        // }


    });
};
