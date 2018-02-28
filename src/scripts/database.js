// const databaseFunction = function() {
//     return {
//         eventsArray: [{
//             title: 'Event 1',
//             // Set to 1st of the month at 12:00 am
//             start: moment().startOf('month'),
//             // Set to en the 1st of the month at 1:30 am
//             end: moment().startOf('month').add(90, 'minutes'),
//             color: 'red'
//         }, {
//             title: 'Event 2',
//             // Set to 1st of the month at 12:00 am
//             start: moment().startOf('month').add(1, 'days'),
//             // Set to end the 1st of the month at 3:00 am
//             end: moment().startOf('month').add({
//                 'days': 1,
//                 'hours': 3
//             }),
//             color: 'green'
//         }, {
//             title: 'Multi-day event',
//             // Set to start the 1st of the month
//             start: moment().startOf('month'),
//             // Set to end one week after the start of the month
//             end: moment().startOf('month').add(1, 'weeks'),
//             color: 'blue',
//             // This is an all-day event
//             allDay: true
//         }]
//     };
// };