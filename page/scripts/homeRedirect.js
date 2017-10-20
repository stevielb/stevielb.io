
$(document).ready(function(){
    var log = $('#dataBar');
    var homeLink = $('.homeLink');
    homeLink.click(function(e){
        if(e.which == 1){
            log.append('which == 1');
        }
    });
});
