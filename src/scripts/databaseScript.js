var database = (function() {
    var add = function(feedback) {
        var feedbacks = getFeedbacks();

        feedbacks.push(feedback);
        localStorage.setItem('feedbackData', JSON.stringify(feedbacks));
    };

    var print = function() {
        var feedbacks = getFeedbacks().reverse();
        var result = feedbacks.join('<br><br>');

        //$('#feedback p').text(result);

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
    var writtenText = $('#commentBox #comment').val();
    database.addFeedback(writtenText);
    database.printFeedbacks();
    // localStorage.setItem('data', writtenText);
});