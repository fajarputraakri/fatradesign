//fade halus
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Box Highlight
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Menutup Respon menu saat di klik
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});