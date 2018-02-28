function saveEventModalInfo(event, typeOfAction) {
    // Get the modal
    var modal = document.getElementById('myModal');

    //add listener for click event
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

        if (validate() !== 'problem') {
            modal.style.display = "none";
            location.reload();
            alert(`Your event PIN is ${getEventPin(event.id)}  \n Please, remember it! \n It's required for any change of appointment \n and if you want to leave feedback `);
        }
    });
};
