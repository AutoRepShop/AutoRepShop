var database = (function() {
    var add = function(feedback) {
        var feedbacks = getFeedbacks();

        feedbacks.push(feedback);
        localStorage.setItem('feedbackData', JSON.stringify(feedbacks));
    };

    var print = function() {
        var feedbacks = getFeedbacks().reverse();
        var result = feedbacks.join('<br><br>');
        $('#displayedComments').html(`${result}`);
    };

    var getFeedbacks = function() {
        return JSON.parse(localStorage.getItem('feedbackData'));
    };

    return {
        addFeedback: add,
        printFeedbacks: print
    };
})();

$('#feedback .submit').click(function() {
    var authorName = $('#userName').val();
    if (authorName === '') {
        alert('Please fill out both areas!');
        return;
    }
    var writtenText = $('#commentBox #comment').val().replace(/\n/g, '<br/>');
    if (writtenText === '') {
        alert('Please fill out both areas!');
        return;
    }
    $('#userName').val('');
    $('#commentBox #comment').val('');

<<<<<<< HEAD
    authorName = authorName.concat(`<br>` + `<p class="add">${writtenText}</p>`);
=======
    authorName = authorName.concat('<br>' + `<p class="add">${writtenText}</p>`);
>>>>>>> b1c01abe5bec0c7af9860dd399e5a601b3e10962
    database.addFeedback(authorName);
    database.printFeedbacks();
});