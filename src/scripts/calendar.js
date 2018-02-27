// Create the calendar when the document is ready
$(document).ready(function() {
    var calendar = $('#calendar').fullCalendar({
            // Start of calendar options

            // height: 'auto',

            weekends: false,

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
                // Ask for a title. If empty it will default to 'New event'

                var title = prompt('Enter a title for this event', 'New event');

                // If did not pressed Cancel button
                if (title != null) {
                    // Create event
                    var event = {
                        id: getEventId(),
                        title: title.trim() !== '' ? title : 'New event',
                        start: start,
                        end: end
                    };

                    // Push event into fullCalendar's array of events
                    // and displays it. The last argument is the
                    // 'stick' value. If set to true the event
                    // will 'stick' even after you move to other
                    // year, month, day or week.


                    calendar.fullCalendar('renderEvent', event, true);
                    addEvent(getAllEvents(), event);

                };

                // Whatever happens, unselect selection
                calendar.fullCalendar('unselect');

            }, // End select callback

            // Make events editable, globally
            editable: true,

            // Callback triggered when we click on an event
            eventClick: function(event, jsEvent, view) {
                // Ask for a title. If empty it will default to 'New event'
                var newTitle = prompt('Enter a new title for this event', event.title);

                // If did not pressed Cancel button
                if (newTitle != null) {
                    let currentEvent = event;
                    // Update event
                    event.title = newTitle.trim() !== '' ? newTitle : event.title;

                    //update localStorage
                    updateEvent(currentEvent, event);
                    // Call the 'updateEvent' method
                    calendar.fullCalendar('updateEvent', event);
                }
            }, // End callback eventClick

            eventDrop: function(event, delta, revertFunc) {
                if (!confirm(`${event.title + ' was dropped on ' + event.start.format()}
                            \nAre you sure about this change?`)) {
                    revertFunc();
                    return;
                }

                const currentEvent = {
                    id: event.id,
                    title: event.title,
                    start: event.start - delta,
                    end: event.end - delta
                };

                updateEvent(currentEvent, event);
            },

            eventResize: function(event, delta, revertFunc) {
                if (!confirm(`${event.title + ' now ends on ' + event.end.format()}
                            \nIs this okay?`)) {
                    revertFunc();
                    return;
                }

                const currentEvent = {
                    id: event.id,
                    title: event.title,
                    start: event.start - delta,
                    end: event.end - delta
                };

                updateEvent(currentEvent, event);
            }

            // // This is the callback that will be triggered when a selection is made
            // select: function(start, end, jsEvent, view) {
            //     alert(start.format('MM/DD/YYYY hh:mm a') + ' to ' + end.format('MM/DD/YYYY h\h:mm a') + ' in view ' + view.name);
            // }

        } // End of calendar options
    );
});