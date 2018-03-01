function saveEventModalInfo(event, typeOfAction) {
    // Get the modal
    var modal = document.getElementById('myModal');

    document.getElementById('save-event').addEventListener('click', function() {
        //save info in localStorage
        event.title = $('#title').val();
        event.start = $('#starts-at').val();
        event.end = $('#ends-at').val();
        event.clientName = $('#clientName').val();
        event.tel = $('#telephone').val();
        event.vehicle = $('#vehicle').val();
        event.description = $('#description').val();

        if (validate() === 'problem') {
            return;
        }

        if (validate() !== 'problem') {
            modal.style.display = 'none';
            //location.reload();
        }

        if (typeOfAction === 'new') {
            localStorage.setItem('nextEventId', JSON.stringify(parseInt(event.id) + 1));
            eventHandler.addEvent(eventHandler.getAllEvents(), event);
        } else if (typeOfAction === 'edit') {
            // update events in localStorage
            updateEvent(event);
        }

        if (validate() !== 'problem') {
            // debugger;
            modal.style.display = 'none';
            alert(`Your event PIN is ${validationsHandler.getEventPin(event.id)}  \n Please, remember it! \n It's required for any change of appointment \n and if you want to leave feedback `);
            location.reload();
        }
    });
};