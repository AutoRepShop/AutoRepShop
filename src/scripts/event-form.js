// function saveEventModalInfo(event, typeOfAction) {
//     // Get the modal
//     var modal = document.getElementById('myModal');

//     document.getElementById('save-event').addEventListener('click', function() {
//         //save info in localStorage
//         event.title = $('#title').val();
//         event.start = $('#starts-at').val();
//         event.end = $('#ends-at').val();
//         event.clientName = $('#clientName').val();
//         event.tel = $('#telephone').val();
//         event.vehicle = $('#vehicle').val();
//         event.description = $('#description').val();

//         if (validate() === 'problem') {
//             return;
//         }

//         if (validate() !== 'problem') {
//             modal.style.display = 'none';
//             //location.reload();
//         }

//         if (typeOfAction === 'new') {
//             localStorage.setItem('nextEventId', JSON.stringify(parseInt(event.id) + 1));
//             eventHandler.addEvent(eventHandler.getAllEvents(), event);
//         } else if (typeOfAction === 'edit') {
//             // update events in localStorage
//             updateEvent(event);
//         }

//         if (validate() !== 'problem') {
//             // debugger;
//             modal.style.display = 'none';
//             alert(`Your event PIN is ${validationsHandler.getEventPin(event.id)}  \n Please, remember it! \n It's required for any change of appointment \n and if you want to leave feedback `);
//             location.reload();
//         }
//     });
// };

function saveEventModalInfo(event, typeOfAction) {
    // Get the modal
    var modal = document.getElementsByClassName('modal')[0];
    var span = document.getElementsByClassName('close')[0];

    document.getElementById('save-event').addEventListener('click', function() {
        //save info in localStorage
        event.title = $('#title').val();
        event.start = $('#starts-at').val();
        event.end = $('#ends-at').val();
        event.clientName = $('#clientName').val();
        event.tel = $('#telephone').val();
        event.vehicle = $('#vehicle').val();
        event.description = $('#description').val();

        debugger;
        if (validate() === 'problem') {
            return;
        }

        if (typeOfAction === 'new') {
            if (validate() !== 'problem') {
                modal.style.display = 'none';
                $('#myModal').hide();
            };

            //store the next available id in LS
            localStorage.setItem('nextEventId', JSON.stringify(parseInt(event.id) + 1));
            eventHandler.addEvent(eventHandler.getAllEvents(), event);

            alert(`Your registration PIN is ${validationsHandler.getEventPin(event.id)}  
            \n Please, remember it! 
            \n It's required for any change of appointment 
            \n and if you want to leave feedback `);
            location.reload();

        } else if (typeOfAction === 'edit') {
            if (validate() !== 'problem') {
                // update events in localStorage
                eventHandler.updateEvent(event);
                //close the modal
                modal.style.display = 'none';
                $('#myModal').hide();
            };
            location.reload();
        }
    });

    span.addEventListener('click', function() {
        modal.style.display = 'none';
        $('#myModal').hide();
    });
};