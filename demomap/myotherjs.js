$(document).ready(function() {
	var winwidth = $(window).width();
	var winheight = $(window).height();		

	var content = $("#content");
	content.css({
		width: (winwidth)  + 'px',
		height: (winheight - 80) + 'px'
	});
});
