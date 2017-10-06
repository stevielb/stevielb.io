$(document).ready(function(){
	log = $('#dataBar');
	$menuBar = $('.menuBar');
	$menuHeader = $menuBar.parent();
	var $menu = $menuHeader.parent();
	$scrollCheck = $menu;
	$menuScroll = $menuBar.children(':first-child');
	$firstButton = $menuScroll.children(':first-child');
	$scL = $menu.children('.scrollArrow.left');
	$scR = $menu.children('.scrollArrow.right');
	$scB = $menu.children('.scrollArrow');
	$buttons = $('.menuButton');
	numButt = $buttons.length;
	var scrollIndex = 0;
	$lastButton = $buttons.eq(numButt-1);
	function rightEnd(){ return $lastButton.offset().left + $lastButton.outerWidth(); };
	function rightMenuEdge(){ return $menu.offset().left + $menu.width(); };
	function showRight(){ return scrollIndex != 0; };
	function showLeft() { return (rightEnd() >= rightMenuEdge()); } ;
	log.append(' last button ' + rightEnd() + ' menuEdge ' + rightMenuEdge());
	log.append(' L ', showLeft()).append(' R ', showRight());
	mlInit = parseFloat($firstButton.css('margin-left'));

	
	//log.append(' buttLength ', numButt);
	
	function setMenuScroll(){
		h = $firstButton.outerHeight();
		$menuBar.height(h);
		h2 = $firstButton.outerHeight(true);
		w = $menu.innerWidth();
		log.append(' w ', w);
		
		$menuHeader.height(h);
		//$scB.height(h);
		w = w - $scL.outerWidth();
		if(showLeft()){
			$scL.css('left', w);
			$scL.css('display', 'block');
		} else {
			$scL.css('display', 'none');
		}
		if(showRight()){
			$menuBar.css('left', $scR.outerWidth());
			$scR.css('display', 'block');
		} else {
			$menuBar.css('left', mlInit);
			$scR.css('display', 'none');
		}

	};
	
	setMenuScroll();
	$(window).resize(setMenuScroll);
	
 	function scroll(left){
		if(left){
			var scrollLeft = true;
		} else {
			var scrollLeft = false;
		}
		if( (scrollIndex == 0 && !(scrollLeft)) || ((scrollIndex == numButt - 1) && scrollLeft)){
			$menu.removeClass('scrolling');//do nothing
		} else {
			//log.append(' scrollIndex ', scrollIndex);
			if (!scrollLeft){
				var fnIndex = scrollIndex -1;
				if (fnIndex == 0) {
					$menuBar.animate({left: mlInit}, 500);
					$scR.animate({opacity:0}, 500, function(){$(this).css('display', 'none')});
				}
			} else {
				var fnIndex = scrollIndex;
				if (scrollIndex == 0){
					$scR.css('display', 'block').animate({opacity:1}, 500);
					$menuBar.animate({left: $scR.outerWidth()}, 500);
				}
			}
			
			
			$button = $buttons.eq(fnIndex);
			ml = parseFloat($menuScroll.css('margin-left'));
			w = $button.outerWidth(true);
			if (scrollLeft) {
				mlnew = ml - w;
				scrollIndex += 1;
			} else {
				mlnew = ml + w;
				scrollIndex -= 1;
			}
			//log.append(' w: ' + w + ' ml '+ ml + ' mlnew ' + mlnew); 
			$menuScroll.animate({marginLeft: mlnew}, 500, function(){
				$menu.removeClass('scrolling');
				if (!showLeft()){
					$scL.animate({opacity:0}, 500, function(){
						$(this).css('display', 'none');
					});
				} else {
					$scL.css('display', 'block').animate({opacity:1}, 500);
				}
			});
		}
	};
	
	$scB.click(function(){
		if(!($menu.hasClass('scrolling'))){
			//log.append(' scrolling ');
			$menu.addClass('scrolling');
			scroll($(this).is('.left'));
			console.log(' isLeft ', $(this).is('.left'));
		} else {
			log.append(' skipping ');
		}
	}); 
	
	
});