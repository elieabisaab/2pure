var currentPic = 1;
var totalPics;
var windowWidth;
var myInterval;

$(document).ready(function(){
	totalPics = $('#picsContainer ul li').size();
	windowWidth = $(window).width();
    $.preload([
		"images/prev_btn_bg.jpg",
		"images/allworks_btn_bg.jpg",
		"images/next_btn_bg.jpg",
		"images/prev_btn_bg2.jpg",
		"images/allworks_btn_bg2.jpg",
		"images/next_btn_bg2.jpg",
		"images/free_quote_bg.jpg",
		"images/work/constravision1.jpg",
		"images/work/constravision2.jpg",
		"images/work/constravision3.jpg",
		"images/work/constravision4.jpg",
		"images/work/justfood1.jpg",
		"images/work/justfood2.jpg",
		"images/work/justfood3.jpg",
		"images/work/oln1.jpg",
		"images/work/oln2.jpg",
		"images/work/oln3.jpg",
		"images/work/prestigecars1.jpg",
		"images/work/prestigecars2.jpg",
		"images/work/prestigecars3.jpg",
		"images/work/prestigecars4.jpg",
		"images/work/mmgeventz1.jpg",
		"images/work/mmgeventz2.jpg",
		"images/work/mmgeventz3.jpg",
		"images/work/wepco1.jpg",
		"images/work/wepco2.jpg",
		"images/work/wepco3.jpg",
		"images/work/wepco4.jpg",
		"images/work/delmonte1.jpg",
		"images/work/delmonte2.jpg",
		"images/work/delmonte3.jpg",
		"images/work/delmonte4.jpg",
		"images/work/fusion51.jpg",
		"images/work/fusion52.jpg",
		"images/work/fusion53.jpg",
		"images/work/fusion54.jpg",
		"images/work/atmosphere1.jpg",
		"images/work/atmosphere2.jpg",
		"images/work/atmosphere3.jpg",
		"images/work/atmosphere4.jpg",
		"images/work/alhamad1.jpg",
		"images/work/alhamad2.jpg",
		"images/work/alhamad3.jpg",
		"images/work/alhamad4.jpg",
		"images/work/alhamad5.jpg",
		"images/work/alhamad6.jpg",
		"images/work/kitkat1.jpg",
		"images/work/kitkat2.jpg",
		"images/work/kitkat3.jpg",
		"images/work/altayer1.jpg",
		"images/work/altayer2.jpg",
		"images/work/nawa3em1.jpg",
		"images/work/nawa3em2.jpg",
		"images/work/nawa3em3.jpg",
		"images/work/olntv1.jpg",
		"images/work/olntv2.jpg",
		"images/work/olntv3.jpg",
		"images/work/olntv4.jpg",
		"images/work/olntv4.jpg",
		"images/work/swarovski1.jpg",
		"images/work/swarovski2.jpg",
		"images/work/swarovski3.jpg",
		"images/work/ezdanre1.jpg",
		"images/work/ezdanre2.jpg",
		"images/work/ezdanre3.jpg",
		"images/work/ourfatherzayed1.jpg",
		"images/prev_arrow.png",
		"images/next_arrow.png",
		"images/visit_us.jpg",
		"images/call_us.jpg",
		"images/email_us.jpg",
		"images/fb_icon.png"
		], {
		init: function(loaded, total) {
			$('.section').hide();
			$('#topMenu').css({'top':'-58px'});
			if (windowWidth > 1024) {
				$('#picsContainer a.prev').css({'left':'0','opacity':'0'});
				$('#picsContainer a.next').css({'right':'0','opacity':'0'});
			}
		},
		loaded: function(img, loaded, total) {
			var pct = Math.round(loaded/total*100);
		},
		loaded_all: function(loaded, total) {
			waitForWebfonts(['eduardian_script_itc','futura_bk_bold','lokicola','titillium_bold','titillium_light','titillium_regular','titillium_semibold','titillium_thin'], function() {
				$('#loading').css({'display':'none'});
				$('.section').fadeIn(500);
				$('#topMenu').delay(500).animate({top:0},400);
			});
			$('a.goTop').animate({opacity:1},750);
			if (totalPics > 1) {
				myInterval = setInterval(function(){
					scrollPics('next');	
				}, 5000);
			}
		}
	});
	
	$('#topMenu a').unbind().click(function(evt){
		var dest = $(this).attr('href');
		evt.preventDefault();
		$('body').fadeOut(750,'',function(){
			document.location.href = dest;	
		});
	});
	
	$('#picsContainer').mouseenter(function(){
		if (windowWidth > 1024) {
			$('#picsContainer a.prev').animate({left:'22px',opacity:1},200);
			$('#picsContainer a.next').animate({right:'22px',opacity:1},200);
		}
    }).mouseleave(function(){
		if (windowWidth > 1024) {
			$('#picsContainer a.prev').animate({left:'0',opacity:0},200);
			$('#picsContainer a.next').animate({right:'0',opacity:0},200);
		}
    });
	
	$('#picsContainer a.next').click(scrollPics);
	$('#picsContainer a.prev').click(scrollPics);
	
	if (windowWidth <= 1024) {
		$('#projectPics #picsContainer ul li').css({'width':windowWidth+'px'});
	}
	
	$("#picsContainer").swipe({
        swipeRight: function (event) {
            scrollPics('prev');
        },
        swipeLeft: function (event) {
            scrollPics('next');
        }
    });
});

function scrollPics(dir) {
	var ww;
	if (windowWidth > 1024) {
		ww = 1000;
	} else {
		ww = windowWidth;
	}
	if ($(this).hasClass('next') || dir == 'next') {
		currentPic++;
		if (currentPic > totalPics) {
			var lastLi = $('#picsContainer ul li:first').html();
			$('#picsContainer ul li:eq('+(totalPics-1)+')').after('<li style="width:'+ww+'px">'+lastLi+'</li>');
		}
	} else if ($(this).hasClass('prev') || dir == 'prev') {
		currentPic--;
		if (currentPic < 1) {
			var firstLi = $('#picsContainer ul li:last').html();
			$('#picsContainer ul li:eq(0)').before('<li style="width:'+ww+'px">'+firstLi+'</li>');
			$('#picsContainer .anim').css({'left':-ww+'px'});
		}
	}
	clearInterval(myInterval);	
	var lim;
	if (currentPic < 1) {
		lim = 1;
	} else {
		lim = currentPic;
	}
	$('#picsContainer .anim').animate({left:-ww*(lim-1)+'px'},750,function(){
		myInterval = setInterval(function(){
			scrollPics('next');	
		}, 5000);
		if (currentPic > totalPics) {
			currentPic = 1;
			$('#picsContainer .anim').css({'left':'0'});
			$('#picsContainer ul li:eq('+(totalPics)+')').remove();	
		} else if (currentPic < 1) {
			currentPic = totalPics;
			$('#picsContainer .anim').css({'left':-ww*(totalPics-1)+'px'});
			$('#picsContainer ul li:eq(0)').remove();	
		}
	});
}