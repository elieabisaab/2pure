var windowHeight;
var windowWidth;

$(document).ready(function(){
	windowWidth = $(window).width();
    $.preload([
		"images/make_you_curious_bg.jpg",
		"images/x_btn.jpg",
		"images/sep2.jpg",
		"images/01_mobile.jpg",
		"images/02_mobile.jpg",
		"images/03_mobile.jpg",
		"images/agency_bg.jpg",
		"images/menu_sep.png",
		"images/a_passion.jpg",
		"images/explore_btn_bg.jpg",
		"images/or.jpg",
		"images/categ_icon.jpg",
		"images/solutions_bg.jpg",
		"images/01.jpg",
		"images/02.jpg",
		"images/03.jpg",
		"images/next_arrow.jpg",
		"images/prev_arrow.jpg",
		"images/fb_icon.png",
		"images/twitter_icon.png",
		"images/fb_share_icon.jpg",
		"images/twitter_share_icon.jpg",
		"images/pin_share_icon.jpg"
		], {
		init: function(loaded, total) {
			$('.section').hide();
			$('#menu').hide();
			$('#content').hide();
			$('#socialTab').css({'right':'-50px'});
			$('#tabs').css({'right':'-70px'});
			$('#makesYouCurious .scrollDown').css({'bottom':'-40px'});
		},
		loaded: function(img, loaded, total) {
			var pct = Math.round(loaded/total*100);
		},
		loaded_all: function(loaded, total) {
			waitForWebfonts(['eduardian_script_itc','futura_bk_bold','lokicola','titillium_bold','titillium_light','titillium_regular','titillium_semibold','titillium_thin'], function() {
				$('#loading').css({'display':'none'});
				$('.section').fadeIn(500);
				setTimeout(function(){$('#menu').fadeIn(750)},1500);
				$('#content').delay(1000).slideDown(1000,'',function(){
					if (windowWidth > 1024) {
						var emptyHeight = $('#content').position().top + $('#content').outerHeight() - $(window).height();
						$('#emtpy').css({'min-height':emptyHeight+'px','height':emptyHeight+'px'});
					}
				});
				if (windowWidth > 1024) {
					$('#socialTab').delay(2000).animate({right:0},500);
					$('#tabs').delay(2000).animate({right:0},500);
				} else {
					$('#makesYouCurious .scrollDown').delay(2000).animate({bottom:0},400);	
				}
				$('a.goTop').animate({opacity:1},750);
			});
			
		}
	});
	
	$('#makesYouCurious .scrollDown').mouseenter(function(){
		$('#makesYouCurious .scrollDown .arrow').animate({top:'26px'},250);
	}).mouseleave(function(){
		$('#makesYouCurious .scrollDown .arrow').animate({top:'22px'},250);
	}).click(function(){
		$.scrollTo('#content', 1000, {'axis':'y'});
	});
	
	$('#tabs a').mouseenter(function(){
		var class1 = $(this).attr('class');
		$('#tabs .'+class1+'Tab').fadeIn(300);
	});
	
	$('#tabs .nextTab').mouseleave(function(){
		$(this).fadeOut(300);
	}).click(function(evt){
		var dest = $(this).parent().find('a.next').attr('href');
		evt.preventDefault();
		$('body').fadeOut(750,'',function(){
			document.location.href = dest;
		});
	});
	
	$('#tabs .prevTab').mouseleave(function(){
		$(this).fadeOut(300);
	}).click(function(evt){
		var dest = $(this).parent().find('a.prev').attr('href');
		evt.preventDefault();
		$('body').fadeOut(750,'',function(){
			document.location.href = dest;
		});
	});
	
	$('#btns a').click(function(evt){
		var dest = $(this).attr('href');
		evt.preventDefault();
		$('body').fadeOut(750,'',function(){
			document.location.href = dest;
		});
	});
});

$(document).scroll(function(){
	if (windowWidth > 1024) {
		var scrollY = $(document).scrollTop();
		$("#makesYouCurious .bg").css({"backgroundPosition":"50% "+(-scrollY*0.5)+"px"});
	}
});