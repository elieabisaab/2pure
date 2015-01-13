var windowWidth;
var mouseEnter = false;
var myInterval;
var mouseX;

$(document).ready(function(){
	windowWidth = $(window).width();
    $.preload([
		"images/lets_work_bg.jpg",
		"images/menu_sep.png",
		"images/categ_icon.jpg",
		"images/come_coffee.jpg",
		"images/free_quote_bg.jpg",
		"images/squares1.jpg",
		"images/squares2.jpg",
		"images/squares3.jpg",
		"images/squares4.jpg",
		"images/squares5.jpg",
		"images/squares6.jpg",
		"images/squares7.jpg",
		"images/squares8.jpg",
		"images/squares9.jpg",
		"images/squares10.jpg",
		"images/squares11.jpg",
		"images/squares12.jpg",
		"images/squares13.jpg",
		"images/squares14.jpg",
		"images/squares15.jpg",
		"images/squares16.jpg",
		"images/squares17.jpg",
		"images/squares18.jpg",
		"images/squares19.jpg",
		"images/constravision_2pure_mobile.jpg",
		"images/just_food_2pure_mobile.jpg",
		"images/oln_2pure_mobile.jpg",
		"images/prestigecars_2pure_mobile.jpg",
		"images/mmgeventz_2pure_mobile.jpg",
		"images/wepco_2pure_mobile.jpg",
		"images/delmonte_2pure_mobile.jpg",
		"images/fusion5_2pure_mobile.jpg",
		"images/fb_icon.png",
		"images/twitter_icon.png",
		"images/fb_share_icon.jpg",
		"images/twitter_share_icon.jpg",
		"images/pin_share_icon.jpg"
		], {
		init: function(loaded, total) {
			$('.section').hide();
			$('#menu').hide();
			$('#letsWork .text').css({'top':'10%','opacity':0});
			$('#letsWork .scrollDown').css({'bottom':'-40px'});
			$('#socialTab').css({'right':'-50px'});
		},
		loaded: function(img, loaded, total) {
			var pct = Math.round(loaded/total*100);
		},
		loaded_all: function(loaded, total) {
			waitForWebfonts(['eduardian_script_itc','futura_bk_bold','lokicola','titillium_bold','titillium_light','titillium_regular','titillium_semibold','titillium_thin'], function() {
				$('#loading').css({'display':'none'});
				$('.section').fadeIn(500);
				$('#squares').fadeIn(500);
				$('#letsWork .text').delay(500).animate({top:'50%','opacity':1},750);
				setTimeout(function(){$('#menu').fadeIn(750)},1500);
				$('#letsWork .scrollDown').delay(2500).animate({bottom:0},400);
				if (windowWidth > 1024) {
					$('#socialTab').delay(3000).animate({right:0},500);
				}
				$('a.letsWork').animate({opacity:1},750);
				$('a.goTop').animate({opacity:1},750);
			});
		}
	});
	
	$('#letsWork .scrollDown').mouseenter(function(){
		$('#letsWork .scrollDown .arrow').animate({top:'26px'},250);
	}).mouseleave(function(){
		$('#letsWork .scrollDown .arrow').animate({top:'22px'},250);
	}).click(function(){
		if (windowWidth > 1024) {
			$.scrollTo('#squares', 1000, {'axis':'y'});
		} else {
			$.scrollTo(($('#squares').position().top)-57, 1000, {'axis':'y'});
		}
	});
	
	$('#squares ul li').mouseenter(function(){
		if (windowWidth > 1024) {
			$('#squares ul li .hoverImg').css({'z-index':'0'});
			var thisHoverImg = $(this).find('.hoverImg');
			thisHoverImg.css({'z-index':'300','box-shadow':'3px 3px 5px #000'});
			thisHoverImg.css({'width':'105%','height':'105%','top':'-2.5%','left':'-2.5%'});
			thisHoverImg.find('h1').css({'font-size':'2.62em'});
		}
	}).mouseleave(function(){
		if (windowWidth > 1024) {
			var thisHoverImg = $(this).find('.hoverImg');
			thisHoverImg.css({'width':'100%','height':'100%','top':'0','left':'0','z-index':'0','box-shadow':'none'});
			thisHoverImg.find('h1').css({'font-size':'2.5em'});
		}
	});
	
	$('#squares ul li a').unbind().click(function(evt){
		var dest = $(this).attr('href');
		evt.preventDefault();
		$('body').fadeOut(750,'',function(){
			document.location.href = dest;	
		});
	});
	
	$('#squares').mouseenter(function(){mouseEnter=true;}).mouseleave(function(){mouseEnter=false;});
	
	resizeSquares();
	
	var xp = 0;
	myInterval = setInterval(function(){
		if (windowWidth > 1024 && mouseEnter) {
			xp += (mouseX + $('#squares .anim').position().left) * 0.12;
			$('#squares .anim').css({'left':-xp+'px'});
		}
	}, 30);
});

$(window).resize(resizeSquares);

$(document).mousemove(function(evt){
	if (windowWidth > 1024) {
		mouseX = evt.pageX*1.25;
	}
});

function resizeSquares() {
	if (windowWidth > 1024) {
		$('#squares .anim').css({'width':(windowWidth*2.25)+'px'});
		$('#squares ul').css({'width':windowWidth+'px'});
		$('#squares ul:last').css({'width':(windowWidth*0.25)+'px'});
		$('#squares ul li').css({'width':(windowWidth/4)+'px'});
		$('#squares').css({'height':(windowWidth/2.14)+'px'});
	}
}