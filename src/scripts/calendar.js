// Create the calendar when the document is ready
// $(document).ready(function() {

// eventsArray = [ {
//         title: 'Event 1',
//         // Set to 1st of the month at 12:00 am
//         start: moment().startOf('month'),
//         // Set to en the 1st of the month at 1:30 am
//         end: moment().startOf('month').add(90, 'minutes')
//         // color: 'red'
//     }, {
//         title: 'Event 2',
//         // Set to 1st of the month at 12:00 am
//         start: moment().startOf('month').add(1, 'days'),
//         // Set to end the 1st of the month at 3:00 am
//         end: moment().startOf('month').add({
//             'days': 1,
//             'hours': 3
//         })
//         // color: 'green'
//     }, {
//         title: 'Multi-day event',
//         // Set to start the 1st of the month
//         start: moment().startOf('month'),
//         // Set to end one week after the start of the month
//         end: moment().startOf('month').add(1, 'weeks')
//         // color: 'blue',
//         // // This is an all-day event
//         // allDay: true
//     }

// ];

// localStorage.setItem("events", JSON.stringify(eventsArray));

// if (formArr.find(x => x.value !== '')) {
//     const todoToAdd = {
//         id: database.todos.length,
//         // id: localStorage.setItem("todosId", "todos".length),
//         title: formArr.find(x => x.name === 'todo-title').value ? formArr.find(x => x.name === 'todo-title').value : 'No Title Set',
//         description: formArr.find(x => x.name === 'todo-desc').value,
//         dueDate: formArr.find(x => x.name === 'todo-date').value,
//         status: formArr.find(x => x.name === 'todo-done') ? formArr.find(x => x.name === 'todo-done').value : 'off'
//     };


//     const listTodoController = listTodos(database);

//     database.todos.push(todoToAdd);
//     localStorage.setItem("todos", JSON.stringify(database.todos));

// localStorage.removeItem("localStorageEvents")

var parsedEvents;
if (JSON.parse(localStorage.getItem("localStorageEvents")) === null) {
    // parsedEvents = [{
    //     title: 'No title',
    //     start: moment().startOf('month'),
    //     end: moment().startOf('month').add(90, 'minutes')
    // }];
} else {
    // 
    parsedEvents = JSON.parse(localStorage.getItem("localStorageEvents"));
    console.log("parsedEvents= " + parsedEvents);
}
console.log([JSON.parse(localStorage.getItem("localStorageEvents"))]);

var calendar = $('#calendar').fullCalendar({
        // Start of calendar options

        height: 'auto',
        
        weekends: false,

        header: {
            left: 'today,month,agendaDay,agendaWeek',
            center: 'title',
            right: 'prev,next'
        },

        // Sets first day of week to Monday
        firstDay: 1,

        aspectRatio: 2.2,

        // Make possible to respond to clicks and selections
        selectable: true,

        events: JSON.parse(localStorage.getItem("localStorageEvents")),
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
                    title: title.trim() !== '' ? title : 'New event',
                    start: start,
                    end: end
                };

                // Push event into fullCalendar's array of events
                // and displays it. The last argument is the
                // 'stick' value. If set to true the event
                // will 'stick' even after you move to other
                // year, month, day or week.

                addEvent(parsedEvents, event);

                calendar.fullCalendar('renderEvent', event, true);

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
                // Update event
                event.title = newTitle.trim() !== '' ? newTitle : event.title;

                // Call the 'updateEvent' method
                calendar.fullCalendar('updateEvent', event);

            }
        } // End callback eventClick

        // // This is the callback that will be triggered when a selection is made
        // select: function(start, end, jsEvent, view) {
        //     alert(start.format('MM/DD/YYYY hh:mm a') + ' to ' + end.format('MM/DD/YYYY h\h:mm a') + ' in view ' + view.name);
        // }

    } // End of calendar options
);
// });
