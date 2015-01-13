var windowWidth;

$(document).ready(function(){
	windowWidth = $(window).width();
    $.preload([
		"images/team_work_bg.jpg",
		"images/menu_sep.png",
		"images/fb_icon.png",
		"images/book.png",
		"images/explore_btn_bg.jpg",
		"images/web_design_icon.png",
		"images/web_dev_icon.png",
		"images/seo_icon.png",
		"images/branding_icon.png",
		"images/twitter_icon.png",
		"images/fb_share_icon.jpg",
		"images/twitter_share_icon.jpg",
		"images/pin_share_icon.jpg",
		"images/effortless_communication.jpg",
		"images/effortless_design.jpg",
		"images/effortless_engagement.jpg",
		"images/effortless_identity.jpg",
		"images/effortless_technology.jpg"
		], {
		init: function(loaded, total) {
			$('.section').hide();
			$('#menu').hide();
			$('#teamWork .text').css({'top':'10%','opacity':0});
			$('#teamWork .scrollDown').css({'bottom':'-40px'});
			$('#socialTab').css({'right':'-50px'});
		},
		loaded: function(img, loaded, total) {
			var pct = Math.round(loaded/total*100);
		},
		loaded_all: function(loaded, total) {
			waitForWebfonts(['eduardian_script_itc','futura_bk_bold','lokicola','titillium_bold','titillium_light','titillium_regular','titillium_semibold','titillium_thin'], function() {
				$('#loading').css({'display':'none'});
				$('.section').fadeIn(500);
				$('#teamWork .text').delay(500).animate({top:'50%','opacity':1},750);
				setTimeout(function(){$('#menu').fadeIn(750)},1500);
				$('#teamWork .scrollDown').delay(2500).animate({bottom:0},400);
				if (windowWidth > 1024) {
					$('#socialTab').delay(3000).animate({right:0},500);
				}
				$('a.goTop').animate({opacity:1},750);
				$('a.letsWork').animate({opacity:1},750);
			});
			
		}
	});
	
	$('#teamWork .scrollDown').mouseenter(function(){
		$('#teamWork .scrollDown .arrow').animate({top:'26px'},250);
	}).mouseleave(function(){
		$('#teamWork .scrollDown .arrow').animate({top:'22px'},250);
	}).click(function(){
		$.scrollTo('#digitalSolutions', 1000, {'axis':'y'});
	});
	
	$('#digitalSolutions .right ul li').mouseenter(function(){
		$(this).find('.dark').fadeIn(300);
		if (windowWidth > 1024) {
			$(this).find('.icon').animate({top:'34px'},300);
			$(this).find('h1').animate({top:'96px',color:'#FFF'},300);
			$(this).find('h2.first').delay(100).animate({top:'141px'},300);
			$(this).find('h2.second').delay(150).animate({top:'166px'},300);
			$(this).find('h2.third').delay(200).animate({top:'191px'},300);
			$(this).find('a.learnMore').delay(250).animate({top:'246px'},300);
		} else {
			$(this).find('h1').animate({color:'#FFF'},300);
		}
	}).mouseleave(function(){
		if (windowWidth > 1024) {
			$(this).find('a.learnMore').animate({top:'320px'},300);	
			$(this).find('h2.third').delay(100).animate({top:'320px'},300);
			$(this).find('h2.second').delay(150).animate({top:'320px'},300);
			$(this).find('h2.first').delay(200).animate({top:'320px'},300);
			$(this).find('h1').delay(250).animate({top:'186px',color:'#434343'},300);
			$(this).find('.icon').delay(250).animate({top:'108px'},300);
			$(this).find('.dark').delay(250).fadeOut(300);
		} else {
			$(this).find('h1').animate({color:'#1b1b1b'},300);
			$(this).find('.dark').fadeOut(300);
		}
	}).mousedown(function(evt){
		var dest = $(this).find('a').attr('href');
		evt.preventDefault();
		$('body').fadeOut(750,'',function(){
			document.location.href = dest;
		});	
	});
});

$(window).scroll(function(){
	if (windowWidth > 1024) {
		var scrollY = $(document).scrollTop();
		$("#teamWork .bg").css({"backgroundPosition":"50% "+(-scrollY*0.5)+"px"});
	}
});