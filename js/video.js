$(document).ready(function(){
	//----- video -----------------
	//return a DOM object
	var video = document.getElementById('ss-vid'); //or
	var video = $('#ss-vid').get(0); //or
	var video = $('#ss-vid')[0];
	 
	//return a jQuery object
	var video = $('#ss-vid');

	//Play/Pause control clicked
	$('.btnPlay').on('click', function() {
	    video[0].play();
	    video[0].controls = true;
	    $('.vid-wrap .controls').fadeOut(1500);
	    return false;
	});

	if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
	    video[0].controls = true;
	    $('.vid-wrap .btnPlay').hide();
	    //$('.vid-wrap .cntrls-text').css({'pointer-events', 'none'});

	    $('.vid-wrap .controls').on('click', function() {
		    video[0].play();
		    video[0].controls = true;
		    $(this).fadeOut(1500);
		    return false;
		});
	}

});