
$(document).ready(function(){
    $profileImage = $('.profileImage');

    $curtain = $('div#curtain');
    $largeProfileImg = $('#largeProfileImg');
    $both = $('div#curtain, #largeProfileImg');

    function resizeProfile(){
        height = $(window).height()*.9;
        width = height / 1.50;
        $largeProfileImg.css('height', height);
        $largeProfileImg.css('width', width);
        $largeProfileImg.css('margin-bottom', -.5*height);
        $largeProfileImg.css('margin-left', -.5*width);
    };

    resizeProfile();
    $(window).resize(resizeProfile);

    $profileImage.click(function(){
        $curtain.addClass('active');
        $curtain.fadeTo(300, .5);
        $largeProfileImg.fadeIn(300);
    });

    $both.click(function() {
        $largeProfileImg.fadeOut(300);
        $curtain.fadeTo(300, 0, function(){
            $curtain.removeClass('active');
        });
    });

    $(document).keyup(function(e) {
        if ($curtain.is('.active')){
            $largeProfileImg.fadeOut(300);
            $curtain.fadeTo(300, 0, function(){
                $curtain.removeClass('active');
            });
        }
    });
});
