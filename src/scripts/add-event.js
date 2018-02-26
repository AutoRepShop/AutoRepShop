    const addEvent = function AddEventToDatabase(eventsArr, event) {

        console.log('eventsArr ' + eventsArr);

        if (eventsArr !== null && typeof eventsArr != 'undefined') {
            alert('eventsArr is not null');
            alert('event = ' + eventsArr);

            eventsArr.push(event);
            alert('tempArr = ' + tempArr);
            console.log('tempArr ' + tempArr);
            localStorage.setItem("localStorageEvents", JSON.stringify(eventsArr));

        } else {

            localStorage.setItem("localStorageEvents", JSON.stringify([event]));
            console.log(eventsArr);

        }

        // eventsArr = JSON.parse(localStorage.getItem("localStorageEvents"));
        
        // return {
        //     eventsFromLS: eventsArr
        // };
    };
