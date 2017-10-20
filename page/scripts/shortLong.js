
$(document).ready(function(){

    function setShortLongs() {
        $shortLongSetup = $('.shortLong .abstract');
        // $("#dataBar").text( $shortLongSetup.length);
        preHeight = $shortLongSetup.height();
    };

    setShortLongs();
    $(window).resize(setShortLongs());

    $button = $('.previewButton');
    $button.click(function(){

        $this = $(this);
        $thisShortLong = $this.parent();
        $thisAbstract = $thisShortLong.children('.abstract');
        $thisContainer = $thisAbstract.children('.container');
        $thisCurtain = $thisShortLong.children('.abstractCurtain');

        h = $thisContainer.height();
        h2 = $thisAbstract.height();

        if($thisShortLong.is('.scrolling')){
            return;
        } else {
            $thisShortLong.addClass('.scrolling');
        }

        if($thisShortLong.is('.open')){
            $thisCurtain.css('display','block');
            $thisAbstract.animate({height: preHeight}, 1000, function(){
                $thisShortLong.removeClass('scrolling');
                $thisShortLong.removeClass('open');
            });
            $thisCurtain.animate({opacity:1},1000);

        } else {//thisShortLong is closed
            $thisCurtain.animate({opacity:0},1000);
            $thisAbstract.animate({height: h}, 1000, function(){
                $thisShortLong.removeClass('scrolling');
                $thisShortLong.addClass('open');
                $thisCurtain.css('display','none');
            });
            $('#dataBar').text('h:' + h + ' h2: ' + h2);
        }

    });
});