

//hightlught sidebar links as you scroll past them
function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.scrollbar a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {

            $('.scrollbar ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

//animation for the thumbsdown icon
function showDoorbellModal () {
  doorbell.show ();
  $('.feedbackrow').addClass('feedbackrowhidden');
  $('.feedbackrowalternate').addClass('feedbackrowalternateshow');
}

//animation for the thumbs up icon
function centerThumbsup () {
	$('.thumbsup').addClass('thumbsupclicked');
	$('.thumbsdown').addClass('thumbsdownclicked');
}

//keeps the sidevbar from scrolling too farther down, uses a plugin
$(document).ready(function() {
  $('.scrollbar').scrollToFixed({ marginTop: 300, limit: $('.tags').offset().top, dontSetWidth: true });
});



//dynamically create the sidebar from h3 links
$(document).ready(function() {
	$(function() {
		var list = $('.scrollbarlist');
		$('h3').each(function() {
			$(list).append('<li><a href="#' + $(this).attr('id') + '">' + $(this).text() + '</a></li>');
		});
	});
});
