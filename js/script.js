$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();

        $('.scrollMessage').css({
        opacity: function() {
            var elementHeight = $(this).height(),
            opacity = ((elementHeight - scrollTop) / elementHeight);
            return opacity;
        }
    });
});
