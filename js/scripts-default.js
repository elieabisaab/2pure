var mouseMove = false;
var windowHeight;
var windowWidth;

$(document).ready(function(){
	windowWidth = $(window).width();
    $.preload([
		"images/2pure_logo.png",
		"images/mobile_menu_icon.png",
		"images/make_you_curious_bg.jpg",
		"images/menu_sep.png",
		"images/scroll_down_arrow.jpg",
		"images/scroll_down_circle.png",
		"images/cloud.png",
		"images/method_bar.jpg",
		"images/method_book.png",
		"images/method_cup.png",
		"images/method_dot.png",
		"images/method_globe.png",
		"images/method_heart.png",
		"images/call_us.jpg",
		"images/email_us.jpg",
		"images/visit_us.jpg",
		"images/constravision_2pure.jpg",
		"images/fusion5_2pure.jpg",
		"images/just_food_2pure.jpg",
		"images/fb_icon.png",
		"images/twitter_icon.png",
		"images/plus_icon.jpg"
		], {
		init: function(loaded, total) {
			$('.section').hide();
			$('#menu').hide();
			$('#makesYouCurious .text').css({'top':'10%','opacity':0});
			$('#makesYouCurious .scrollDown').css({'bottom':'-40px'});
			$('#cloudContainer').hide();
			if (windowWidth > 1024) {
				$('#method .text').css({'top':'0'});
				$('#method .text h2').css({'opacity':'0','margin-top':'0'});
				$('#method .text .regular').css({'opacity':'0','margin-top':'0'});
				$('#method .findMore').css({'opacity':'0','bottom':'0'});
			}
		},
		loaded: function(img, loaded, total) {
			var pct = Math.round(loaded/total*100);
		},
		loaded_all: function(loaded, total) {
			waitForWebfonts(['eduardian_script_itc','futura_bk_bold','lokicola','titillium_bold','titillium_light','titillium_regular','titillium_semibold','titillium_thin'], function() {
				var textDest;
				if (windowWidth <= 1024) {
					textDest = 50;
				} else {
					textDest = 26.6;
				}
				$('#loading').css({'display':'none'});
				$('.section').fadeIn(500);
				$('#makesYouCurious .text').delay(500).animate({top:textDest+'%',opacity:1},750);
				setTimeout(function(){$('#menu').fadeIn(750)},1500);
				$('#makesYouCurious .scrollDown').delay(2500).animate({bottom:0},400);
				if (windowWidth > 1024) {
					$('#cloudContainer').delay(3000).fadeIn(1000);
				}
				$('a.letsWork').animate({opacity:1},750);
				$('a.goTop').animate({opacity:1},750);
			});
			if (windowWidth > 1024) {
				floatCloud();
			}
		}
	});
	
	$('#makesYouCurious .scrollDown').mouseenter(function(){
		$('#makesYouCurious .scrollDown .arrow').animate({top:'26px'},250);
	}).mouseleave(function(){
		$('#makesYouCurious .scrollDown .arrow').animate({top:'22px'},250);
	}).click(function(){
		$.scrollTo('#method', 1000, {'axis':'y'});
	});
	
	$('#caseStudies #projects ul li').mouseenter(function(){
		if (windowWidth > 1024) {
			$(this).find('.plusIcon').css({'bottom':'-33px','opacity':'0'});
			$(this).find('.dark').fadeIn(400);
			$(this).find('.plusIcon').animate({bottom:'50%',opacity:1},400);
			$(this).find('h1').animate({color:'#96ddf9'},400);
		}
	}).mouseleave(function(){
		if (windowWidth > 1024) {
			$(this).find('.plusIcon').animate({bottom:'-33px',opacity:0},400);
			$(this).find('.dark').fadeOut(400);
			$(this).find('h1').animate({color:'#212121'},400);
		}
	});
	
	$('#method #bar .dot').mouseenter(function(){
		var class2 = $(this).attr('class').split(' ')[1];
		if ($('#method #bar .circle.'+class2).is(':hidden')) {
			if ($('#method #bar .circle.'+class2).attr('left') != undefined) {
				var left2 = Number($('#method #bar .circle.'+class2).attr('left'));
				$('#method #bar .circle.'+class2).css({'width':'1px','height':'1px','left':(left2+103)+'px','top':'0'});
				$('#method #bar .circle.'+class2).css({'display':'block'});
				$('#method #bar .circle.'+class2).animate({left:left2+'px',top:'-100px',width:'206px',height:'206px'},500);
			} else {
				var right2 = Number($('#method #bar .circle.'+class2).attr('right'));
				$('#method #bar .circle.'+class2).css({'width':'1px','height':'1px','right':(right2+103)+'px','top':'0'});
				$('#method #bar .circle.'+class2).css({'display':'block'});
				$('#method #bar .circle.'+class2).animate({right:right2+'px',top:'-100px',width:'206px',height:'206px'},500);
			}
			$('#method #bar .circle.'+class2+' .particles').delay(100).css({'display':'block'});
			$('#method #bar .circle.'+class2+' .particles.particles1').delay(100).css({'width':'1px','height':'1px','margin-left':'0','margin-top':'0'});
			$('#method #bar .circle.'+class2+' .particles.particles1').delay(100).animate({'width':'250px','height':'276px','margin-left':'-125px','margin-top':'-138px'},400);
			$('#method #bar .circle.'+class2+' .particles.particles2').delay(100).css({'width':'1px','height':'1px','margin-left':'0','margin-top':'0'});
			$('#method #bar .circle.'+class2+' .particles.particles2').delay(100).animate({'width':'200px','height':'221px','margin-left':'-100px','margin-top':'-110px'},400,function(){mouseMove=true;});
		}
	}).mouseleave(function(){
		var class2 = $(this).attr('class').split(' ')[1];
		if (!$('#method #bar .circle.'+class2).is(':hidden')) {
			mouseMove = false;
			if ($('#method #bar .circle.'+class2).attr('left') != undefined) {
				var left2 = Number($('#method #bar .circle.'+class2).attr('left'));
				$('#method #bar .circle.'+class2).animate({left:(left2+103)+'px',top:0,width:'1px',height:'1px'},500,function(){
					$('#method #bar .circle.'+class2).css({'display':'none'});
				});
			} else {
				var right2 = Number($('#method #bar .circle.'+class2).attr('right'));
				$('#method #bar .circle.'+class2).animate({right:(right2+103)+'px',top:0,width:'1px',height:'1px'},500,function(){
					$('#method #bar .circle.'+class2).css({'display':'none'});
				});
			}
		}
	});
});

$(document).mousemove(function(e){
	if (mouseMove) {
		var mouseX = e.pageX - ($('#method #bar').position().left - ($('#method #bar').width()/2));
		var mouseY = (e.pageY-$(window).height()) - ($('#method #bar').position().top - ($('#method #bar').height()/2));
		var finalMouseX = 0;
		var finalMouseY = mouseY - 7;
		if (!$('#method #bar .circle.studying').is(':hidden')) {
			finalMouseX = mouseX - 7;
		} else if (!$('#method #bar .circle.creating').is(':hidden')) {
			finalMouseX = mouseX - 280;
		} else if (!$('#method #bar .circle.developing').is(':hidden')) {
			finalMouseX = mouseX - 552;
		} else if (!$('#method #bar .circle.testing').is(':hidden')) {
			finalMouseX = mouseX - 825;
		}
		$('#method #bar .circle .particles.particles1').css({'margin-left':(-125-(finalMouseX*0.5))+'px','margin-top':(-138+(finalMouseY*0.3))+'px'});
		$('#method #bar .circle .particles.particles2').css({'margin-left':(-100+(finalMouseX*0.3))+'px','margin-top':(-110-(finalMouseY*0.5))+'px'});
	}
});

$(document).scroll(function(){
	if (windowWidth > 1024) {
		var scrollY = $(document).scrollTop();
		windowHeight = $(window).height();
		$("#makesYouCurious .bg").css({"backgroundPosition":"50% "+(-scrollY*0.5)+"px"});
		if (scrollY >= $('#method').position().top - (windowHeight/1.5)) {
			if ($('#method .text').css('opacity') == 0) {
				$('#method .text').animate({opacity:1,top:'12.5%'},500);
				$('#method .text h2').delay(200).animate({opacity:1,marginTop:'20px'},500);
				$('#method .text .regular').delay(400).animate({opacity:1,marginTop:'50px'},500);
			}
		}
		if (scrollY >= $('#method').position().top - (windowHeight/2.5)) {
			if (!$('#method #bar .mask1').is(':hidden')) {
				$('#method #bar .mask1').animate({left:'-700px'},1000,'easeInQuad');
				$('#method #bar .mask2').animate({right:'-700px'},1000,'easeInQuad',function(){
					$('#method #bar .mask1').css({'display':'none'});
					$('#method #bar .mask2').css({'display':'none'});
					$('#method .findMore').animate({opacity:1,bottom:'3%'});	
				});
			}
		}
		if (scrollY >= $('#caseStudies').position().top - (windowHeight/1.5)) {
			if ($('#caseStudies .text').css('opacity') == 0) {
				$('#caseStudies .text').animate({opacity:1},500);
				$('#caseStudies .text .regular').delay(500).animate({opacity:1},500);
			}
		}
		if (scrollY >= $('#caseStudies').position().top - (windowHeight/2.5)) {
			if ($('#caseStudies #projects').css('opacity') == 0) {
				$('#caseStudies #projects').animate({opacity:1},500);
				$('#caseStudies a.moreProjects').animate({opacity:1},500);
			}
		}
	}
});

$(window).resize(function(){
	windowWidth = $(window).width();
	if (windowWidth <= 1024) {
		$('#makesYouCurious .text').css({'top':'50%'});
	} else {
		$('#makesYouCurious .text').css({'top':'26.6%'});
	}
});

function floatCloud() {
	$('#cloud').animate({top:'2%'},1000,function(){
		$('#cloud').animate({top:0},1200,floatCloud);
	});
}