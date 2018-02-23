$('document').ready(function() {
    $('#menuCal, #menuCli, #menuMech, #menuFeed, #menuAbout').click( function() {
        var $div = $('#' + $(this).data('href'));
        $('.hideable').not($div).hide();
        $div.slideToggle();
    });
});