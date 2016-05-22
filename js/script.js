$('#beer').click(function() {
	$('#myIframe').prepend('<div class="player"><iframe width="560" height="315" src="https://www.youtube.com/embed/8i5k4I1AOEI" frameborder="0" allowfullscreen></iframe></div><div><button onclick="silly()">This is very silly, close the video now.</button></div>');
});

function silly(){
	$('#myIframe').empty();
};



$("#javascript").animatedModal({
	modalTarget:'js',
	color: '#ffffff',
	afterClose: function() {
		$('body').removeAttr('style');
		$('html').removeAttr('style');
	}
});

$("#pastprojects").animatedModal({
	modalTarget:'past',
	color: '#ffffff',
	afterClose: function() {
		$('body').removeAttr('style');
		$('html').removeAttr('style');
	}
});

$("#wordpress").animatedModal({
	modalTarget:'wp',
	color: '#ffffff',
	afterClose: function() {
		$('body').removeAttr('style');
		$('html').removeAttr('style');
	}
});

$("#learning").animatedModal({
	modalTarget:'learn',
	color: '#ffffff',
	afterClose: function() {
		$('body').removeAttr('style');
		$('html').removeAttr('style');
	}
});

$("#otherstuff").animatedModal({
	modalTarget:'other',
	color: '#ffffff',
	afterClose: function() {
		$('body').removeAttr('style');
		$('html').removeAttr('style');
	}
});

$("#pastprojects").click(function(){
	$("#past").effect( "highlight", {color:"#669966"}, 1000 );
});

$("#javascript").click(function(){
	$("#js").effect( "highlight", {color:"#669966"}, 1000 );
});

$("#wordpress").click(function(){
	$("#wp").effect( "highlight", {color:"#669966"}, 1000 );
});

$("#learning").click(function(){
	$("#learn").effect( "highlight", {color:"#669966"}, 1000 );
});

$("#otherstuff").click(function(){
	$("#other").effect( "highlight", {color:"#669966"}, 1000 );
});

