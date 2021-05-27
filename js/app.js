$(document).ready(function() {
    $(window).scroll(function() {
        $('.hiddenToStart').each(function(i) {
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            var width = $(window).width()

            if (bottom_of_window > bottom_of_element && width >= 768) {

                $(this).animate({ 'opacity': '1' }, 300);

            }
        });

    });
})