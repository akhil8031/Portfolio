$(document).ready(function(){
	//initial
	$('.icon.icon--cross').hide();
	$('.back').hide();

	//menu icon click
	$('.icon.icon--menu').click(function(){
	
		$('#info').fadeTo( 'slow',0, function() {  });
		$(this).hide();
		$('.icon.icon--cross').show();
		$('.tabsnav').fadeTo('slow',1, function(){ });
		
	});

	//cross icon click
	$('.icon.icon--cross').click(function(){

		$('.tabsnav').fadeTo('slow',0, function(){ });
		$('.icon.icon--cross').hide();
		$('.icon.icon--menu').show();
		$('#info').fadeTo('slow',1, function() {  })
		
	});

	//click navtab
	$('.tabsnav__item').click(function(){
		var index = $('.tabsnav__item').index(this);
		if(index==0)
			$('.tabsnav').animate({top: '0'},400);
		if(index==1)
			$('.tabsnav').animate({top: '-66px'},400);
		if(index==2)
			$('.tabsnav').animate({top: '-132px'},400);
		if(index==3)
			$('.tabsnav').animate({top: '-198px'},400);
		$(this).animate({height: '648px'},400);
		$('.btn.btn--back').fadeTo('slow',1,function(){ });
	});

	//back btn click
	$('.btn.btn--back').click(function(){
		$('.tabsnav').animate({top: '25%'},400);
		$('.btn.btn--back').fadeTo('fast',0,function(){ });
		$('.tabsnav__item').animate({height: '60px'},400);
	});

	//flipping tabs
	$('.sub_tabsnav_item.des').mouseenter(function(){
		$('#front_des').hide();
		$('#back_des').show();
	});

	$('.sub_tabsnav_item.des').mouseleave(function(){
		$('#back_des').hide();
		$('#front_des').show();
	});

	$('.sub_tabsnav_item.fe').mouseenter(function(){
		$('#front_fe').hide();
		$('#back_fe').show();
	});

	$('.sub_tabsnav_item.fe').mouseleave(function(){
		$('#back_fe').hide();
		$('#front_fe').show();
	});
	
	$('.sub_tabsnav_item.db').mouseenter(function(){
		$('#front_db').hide();
		$('#back_db').show();
	});

	$('.sub_tabsnav_item.db').mouseleave(function(){
		$('#back_db').hide();
		$('#front_db').show();
	});

	$('.sub_tabsnav_item.be').mouseenter(function(){
		$('#front_be').hide();
		$('#back_be').show();
	});

	$('.sub_tabsnav_item.be').mouseleave(function(){
		$('#back_be').hide();
		$('#front_be').show();
	});

});

