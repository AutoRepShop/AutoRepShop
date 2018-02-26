var database = (function() {
    var feedbacks = [];

    var add = function(feeds) {
        
        var temp = localStorage.getItem('data').split(',');
        temp.push(feeds);
        localStorage.setItem('data', temp);
    };

    var getFeedbacks = function() {
        var result = '';
        var local = localStorage.getItem('data').split(',');
        local.array.forEach(x => x => result += x + '\r\n');
        $('#feedback p').text(result);
        // .forEach(x => result += x + '\r\n');

        // return result;
    };

    return {
        add: add,
        getFeedbacks: getFeedbacks
    };
})();

$('#feedback .submit').click(function() {
    var writtenText = $('#commentBox #comment').val();
    database.add(writtenText);
    // localStorage.setItem('data', writtenText);
});

