// Create the calendar when the document is ready
// $(document).ready(function() {
var calendar = $('#calendar').fullCalendar({
    weekends: false,

    businessHours: {
        // days of week. an array of zero-based day of week integers (0=Sunday)
        dow: [1, 2, 3, 4, 5], // Monday - Thursday
        start: '08:00',
        end: '20:00'
    },

    height: window.innerHeight * .85,

    header: {
        left: 'month,agendaDay,agendaWeek',
        center: 'title',
        right: 'prev,next'
    },

    // Sets first day of week to Monday
    firstDay: 1,

    // Make possible to respond to clicks and selections
    selectable: true,

    events: eventHandler.getAllEvents(),

    // This is the callback that will be triggered when a selection is made.
    // It gets start and end date/time as part of its arguments
    select: function(start, end) {
        // Create event
        var event = {
            id: eventHandler.getEventId(),
            title: 'New event',
            start: start,
            end: end,
            clientName: 'Please enter your name',
            tel: 'Please enter telephone',
            vehicle: 'Please enter vehicle brand/ model/ year/ hp',
            description: 'Please describe your problem',
            color: getRandomColor()
        };

        $('#myModal').load('eventForm.html', function() {
            $('.modal').show();
            saveEventModalInfo(event, 'new');
        });
    },

    // Make events editable, globally
    editable: true,

    // Defines what happens when you click on an existing event
    eventClick: function(event, element) {
        // Display the modal and set the values to the event values.
        if (validationsHandler.validatePin(event.id)) {
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
        }
    },

    // Defines what happens when you drag and drop an existing event
    eventDrop: function(event, delta, revertFunc) {
        if (validationsHandler.validatePin(event.id)) {
            if (!confirm(`${event.title + ' was dropped on ' + event.start.format()}
                            \nAre you sure about this change?`)) {
                revertFunc();
                return;
            }

            updateEvent(event);
            return;
        }

        revertFunc();
    }
});