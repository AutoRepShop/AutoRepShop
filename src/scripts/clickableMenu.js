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
        var $div = $('#' + $(this).data('href'));
        $('.hideable').not($div).hide();
        $div.slideToggle();
        $('.menu-item').removeClass('clicked');
        $(this).removeClass('menu-item:hover');
        $(this).addClass('clicked');
    });
});