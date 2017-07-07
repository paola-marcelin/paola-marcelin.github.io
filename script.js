jQuery(document).ready(function () {

// jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
});


    //button
  $ { header: "button" },.click(function() {
    console.log( "Le has dado click a un boton" );
});  