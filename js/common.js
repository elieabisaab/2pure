var deltaY = 0;
var wheelIsScrolling = false;
var wh;

$(document).ready(function(){
	resizeMenu();
	$('#menu ul li a').unbind().click(function(evt){
		var dest = $(this).attr('href');
		evt.preventDefault();
		$('body').fadeOut(750,'',function(){
			document.location.href = dest;	
		});
	});
	$('#btnsMobile ul li a').unbind().click(function(evt){
		var dest = $(this).attr('href');
		evt.preventDefault();
		$('body').fadeOut(750,'',function(){
			document.location.href = dest;	
		});
	});
	$('#menu a.iconMobile').click(function(){
		$('#btnsMobile').css({'top':-$(window).height()+'px'});
		$('#btnsMobile').animate({top:0},750);
	});
	$('#btnsMobile a.closeMenuBtn').click(function(){
		$('#btnsMobile').animate({top:'-200%'},750);
	});
    $('#mapBtn').click(function(){
		$('#map').fadeIn(500,'',function(){
			$('#map').html('<div class="table"><div class="tableCell"><iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3613.138251608657!2d55.17620799999999!3d25.097181!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b7a1d343d03%3A0x99e8c984bfbe0838!2sTecom!5e0!3m2!1sen!2s!4v1412161109334" width="90%" height="90%" frameborder="0" style="border:0"></iframe></div></div><a href="javascript:void(0)" onClick="closeMap()" class="close"></a>');
		});
	});
	$('a.goTop').click(function(){
		$.scrollTo('#top', 1000, {'axis':'y'});
	});
});

$(window).resize(function(){
    resizeMenu();
});

function closeMap() {
	$('#map').fadeOut(500,'',function(){
		$('#map').html('');
	});
}

function resizeMenu() {
	wh = $(window).height();
	windowWidth = $(window).width();
	$('#menu #btnsMobile').css({'height':(wh+50)+'px'});	
}