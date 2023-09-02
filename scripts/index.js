$(function() {

    $('.navigation-cell').click(function() {
        $('.navigation-mobile').css("display", "flex")
        $('#navigation-cell-a').css("display", "none")
        $('#navigation-cell-b').css("display", "block")

        $('html, body').css({
            'overflow': 'hidden'
        });
        
    })

    $('#navigation-cell-b, .links-nav, .navigation-mobile').click(function() {
        $('.navigation-mobile').css("display", "none")
        $('#navigation-cell-a').css("display", "block")
        $('#navigation-cell-b').css("display", "none")


        $('html, body').css({
            'overflow': 'auto'
        });
    })

    $(window).resize(function() {
            var elementWidth = $(window).width();
            if(elementWidth > 698) {
                $('.navigation-mobile').css("display", "none")
                $('#navigation-cell-a').css("display", "none")
                $('#navigation-cell-b').css("display", "none")
            }else if(elementWidth < 700){
                $('.navigation-mobile').css("display", "none")
                $('#navigation-cell-a').css("display", "block")
                $('#navigation-cell-b').css("display", "none")
            }
      });

})
