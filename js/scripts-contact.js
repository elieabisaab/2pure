var isWorking = false;
var windowWidth;

$(document).ready(function(){
	windowWidth = $(window).width();
    $.preload([
		"images/contact_bg.jpg",
		"images/contact_bg_mobile.jpg",
		"images/menu_sep.png",
		"images/any_question.jpg",
		"images/come_coffee.jpg",
		"images/write_message.jpg",
		"images/fb_icon.png",
		"images/twitter_icon.png",
		"images/fb_share_icon.jpg",
		"images/twitter_share_icon.jpg",
		"images/pin_share_icon.jpg"
		], {
		init: function(loaded, total) {
			$('.section').hide();
			$('#menu').hide();
			$('#letsTalk .text').css({'top':'10%','opacity':0});
			$('#letsTalk .scrollDown').css({'bottom':'-40px'});
			$('#socialTab').css({'right':'-50px'});
		},
		loaded: function(img, loaded, total) {
			var pct = Math.round(loaded/total*100);
		},
		loaded_all: function(loaded, total) {
			waitForWebfonts(['eduardian_script_itc','futura_bk_bold','lokicola','titillium_bold','titillium_light','titillium_regular','titillium_semibold','titillium_thin'], function() {
				$('#loading').css({'display':'none'});
				$('.section').fadeIn(500);
				if (windowWidth > 1024) {
					$('#letsTalk .text').delay(500).animate({top:'32%','opacity':1},750);
				} else {
					$('#letsTalk .text').delay(500).animate({top:'50%','opacity':1},750);
				}
				setTimeout(function(){$('#menu').fadeIn(750)},1500);
				$('#letsTalk .scrollDown').delay(2500).animate({bottom:0},400);
				if (windowWidth > 1024) {
					$('#socialTab').delay(3000).animate({right:0},500);
				}
				$('a.goTop').animate({opacity:1},750);
			});
			
		}
	});
	
	$('#letsTalk .scrollDown').mouseenter(function(){
		$('#letsTalk .scrollDown .arrow').animate({top:'26px'},250);
	}).mouseleave(function(){
		$('#letsTalk .scrollDown .arrow').animate({top:'22px'},250);
	}).click(function(){
		$.scrollTo('#weWant', 1000, {'axis':'y'});
	});
	
	$('a.submit').click(prepareForm);
});

$(document).scroll(function(){
	if (windowWidth > 1024) {
		var scrollY = $(document).scrollTop();
		$('#letsTalk .bg').css({'background-position':'50% '+(-scrollY*0.3)+'px'});
	}
});

function prepareForm() {
	if (!isWorking) {
		isWorking = true;
		$('a.submit .table .tableCell').html('please wait...');
		$('a.submit').css({'cursor':'default'});
		setTimeout(submitForm, 500);
	}
}

function submitForm() {
	var formData = $('#form1').serialize();
    $.ajax({
        url: 'send-form.php',
        type: 'POST',
        data: formData,
        success: function(data) {
            if (data == 'success') {
				$('#form1').find('input[type=text], input[type=email], input[type=tel], textarea').val('');
				$('#form1').find('input[type=checkbox]').attr('checked', false);
				$('a.submit .table .tableCell').html('thank you!');
			} else {
				$('a.submit .table .tableCell').html(data);
				setTimeout(function(){
					$('a.submit .table .tableCell').html('submit form');
					$('a.submit').css({'cursor':'pointer'});
					isWorking = false;
				}, 2000);
			}
        }
    });
	return false;
}