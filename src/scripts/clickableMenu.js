$('#clients').hide();
$('#mechanics').hide();
$('#feedback').hide();
$('#about').hide();

// $('document').ready(function() {
//         $('#clients').hide();
//         $('#mechanics').hide();
//         $('#feedback').hide();
//         $('#about').hide();
// });

$('document').ready(function() {

    $('#menuCal, #menuCli, #menuMech, #menuFeed, #menuAbout').click(function() {
        $('#hiddenBox').css('visibility', 'unset');
        var $div = $('#' + $(this).data('href'));
        $('.hideable').not($div).hide();
        $div.slideToggle();
    });
});