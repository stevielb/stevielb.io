$(document).ready(function(){
	var $log = $('#dataBar');
	$log.append('setting answers');
	$answerButton = $('.answerButton');
	$answerButton.click(function(){
		$this = $(this);
		$thisAnswer = $this.parent();
		$thisSolution = $thisAnswer.children('.solution');
		$thisSolution.animate({opacity:1});
		$log.append('click');
	});
});