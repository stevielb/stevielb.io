

$(document).ready(function(){
	var log = $('#dataBar');
	var homeLink = $('.homeLink');
	homeLink.click(function(e){
		if(e.which == 1){
			log.append('which == 1');
		}
		//window.location.assign('http://www.stephen-lewis.net');
	});
});