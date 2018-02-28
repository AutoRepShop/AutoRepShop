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
        if ($(this).hasClass('clicked')) {
            return;
        }
        $('#hiddenBox').css('visibility', 'unset');
        var divi = $('#' + $(this).data('href'));
        $('.hideable').not(divi).hide();
        divi.slideToggle();
        $('.menu-item').removeClass('clicked');
        $(this).removeClass('menu-item:hover');
        $(this).addClass('clicked');
    });
});