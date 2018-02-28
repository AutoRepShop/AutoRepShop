// Create the calendar when the document is ready
// $(document).ready(function() {
var calendar = $('#calendar').fullCalendar({
    // Start of calendar options

    // height: 'auto',

    weekends: false,

    businessHours: {
        // days of week. an array of zero-based day of week integers (0=Sunday)
        dow: [1, 2, 3, 4, 5], // Monday - Thursday
        start: '08:00', // a start time (10am in this example)
        end: '20:00' // an end time (6pm in this example)
    },

    height: window.innerHeight * .9,

    header: {
        left: 'month,agendaDay,agendaWeek',
        center: 'title',
        right: 'prev,next'
    },

    // Sets first day of week to Monday
    firstDay: 1,

    // Make possible to respond to clicks and selections
    selectable: true,

    events: getAllEvents(),
    // events: eventsArray,

    // select: function(start, end, jsEvent, view) {
    //     alert(start.format('MM/DD/YYYY hh:mm a') + ' to ' + end.format('MM/DD/YYYY h\h:mm a') + ' in view ' + view.name);
    // },


    // This is the callback that will be triggered when a selection is made.
    // It gets start and end date/time as part of its arguments
    select: function(start, end, jsEvent, view) {

        // Create event
        var event = {
            id: getEventId(),
            title: 'New event',
            start: start,
            end: end,
            clientName: 'Please enter your name',
            tel: 'Please enter telephone',
            vehicle: 'Please enter vehicle brand/ model/ year/ hp',
            description: 'Please describe your problem',
            color: 'blue' //'#' + math.random() * 999999

        };


        $('#myModal').load('eventForm.html', function() {
            $('.modal').show();
            //add Click event listener
            saveEventModalInfo(event, 'new');
        });


        // Ask for a title. If empty it will default to 'New event'
        // var title = prompt('Enter a title for this event', 'New event');

        // If did not pressed Cancel button
        // if (title != null) {

        alert(`Your event PIN is ${getEventPin(event.id)}`);
    },


    // Push event into fullCalendar's array of events
    // and displays it. The last argument is the
    // 'stick' value. If set to true the event
    // will 'stick' even after you move to other
    // year, month, day or week.

    // calendar.fullCalendar('renderEvent', event, true);


    eventClick: function(event, element) {
        // Display the modal and set the values to the event values.
        if (validatePin(event.id)) {
            $('#myModal').load('eventForm.html', function() {
                $('.modal').show();
            });

            // };

            // Whatever happens, unselect selection
            calendar.fullCalendar('unselect');
            // updateEvent(currentEvent, event);
        }

    }, // End select callback

    // Make events editable, globally
    editable: true,

    // // Callback triggered when we click on an event
    // eventClick: function(event, jsEvent, view) {
    //     // Ask for a title. If empty it will default to 'New event'
    //     var newTitle = prompt('Enter a new title for this event', event.title);

    eventClick: function(event, element) {
        // Display the modal and set the values to the event values.
        var pin = prompt('Please enter PIN in order to change or view this event');
        if (pin === event.id) {
            $('#myModal').load('eventForm.html', function() {
                $('.modal').show();
                //Fill with existing data in case of edit
                $('#title').val(event.title);
                $('#starts-at').val(event.start);
                $('#ends-at').val(event.end);
                $('#clientName').val(event.clientName);
                $('#telephone').val(event.tel);
                $('#vehicle').val(event.vehicle);
                $('#description').val(event.description);

                //add Click event listener
                $('#eventModalId').text('Edit Appointment');
                saveEventModalInfo(event, 'edit');
            });

            // updateEvent(event);

        } else {
            alert('PIN is not correct, please try again');
        }
    },
    // saveButton().on('click', function() {
    //     $('#myModal').find('#title').val(event.title);

    eventDrop: function(event, delta, revertFunc) {
        if (!confirm(`${event.title + ' was dropped on ' + event.start.format()}
                            \nAre you sure about this change?`)) {
            revertFunc();
            return;
        }

        updateEvent(event);
    },

    eventResize: function(event, delta, revertFunc) {
        if (!confirm(`${event.title + ' now ends on ' + event.end.format()}
                            \nIs this okay?`)) {
            revertFunc();
            return;
        }

        updateEvent(event);
    }

    //     modal.style.display = "none";
    // });



    // $('#myModal').modal('show');
    // $('#myModal').find('#starts-at').val(event.start);
    // $('#myModal').find('#ends-at').val(event.end);

});

// // Callback triggered when we click on an event
// eventClick: function(event, jsEvent, view) {
//         // Ask for a title. If empty it will default to 'New event'
//         var newTitle = prompt('Enter a new title for this event', event.title);

//     // If did not pressed Cancel button
//     if (newTitle != null) {
//         let currentEvent = event;
//         // Update event
//         event.title = newTitle.trim() !== '' ? newTitle : event.title;

//         //update localStorage
//         updateEvent(currentEvent, event);
//         // Call the 'updateEvent' method
//         calendar.fullCalendar('updateEvent', event);

//         }
//     } // End callback eventClick

// // This is the callback that will be triggered when a selection is made
// select: function(start, end, jsEvent, view) {
//     alert(start.format('MM/DD/YYYY hh:mm a') + ' to ' + end.format('MM/DD/YYYY h\h:mm a') + ' in view ' + view.name);
// }

// });