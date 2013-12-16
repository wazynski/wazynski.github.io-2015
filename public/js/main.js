$(document).ready(function() {
	console.log("Loading...");
	slideSize();
});


/* ---------------------------------------------------------
	slideSize()
		Calculates the size of the slides to match window
		height and sets it via CSS
------------------------------------------------------------ */

function slideSize() {
	$('.slide') .css({'height': (($(window).height()) )});
	$('.content-frame').css({'height': $(window).height()});
	vAlign($("div.content-frame"));
}

/* --------------------------------------------------------- */

/* ---------------------------------------------------------
	vAlign(container)
    	Vertically aligns the 'div.content' in the container
------------------------------------------------------------ */

function vAlign(container) {
	container.each(function(i) {
		var wrapper = $(this).children('.content');
		var wrapperHeight = $(wrapper).height(); // Contents Height

		var parentHeight = $(this).height(); // Parents Height
		var centeredHeight = (parentHeight - wrapperHeight) / 2;
		$(wrapper).css('padding-top', centeredHeight);
	});
}

/* --------------------------------------------------------- */

/* ---------------------------------------------------------
	removeVAlign()
		Removes any padding set by vAlign(container)
------------------------------------------------------------ */

function removeVAlign() {
	$('.content').css('padding-top', '0');
}

/* --------------------------------------------------------- */
