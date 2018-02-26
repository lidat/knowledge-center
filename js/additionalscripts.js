

//hightlught sidebar links as you scroll past them
$(document).scroll(function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.scrollbarlist a').each(function () { // fpr each link in sidebar
        var currLink = $(this);
        var refElement = $(currLink.attr("href")); //compare href to anchor
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() < scrollPos) { // if the position of the link is below the head of the page
            $('.scrollbarlist a').removeClass("active"); //remove active from any previous active links
            currLink.addClass("active"); //add active to the current link
        }
        else{
            currLink.removeClass("active"); // if no links are active, remove the class
        }
    });
});

$(document).scroll(function onScroll(event){
  if ($('.scrollbar').css('position') == 'absolute') {
    $('.scrollbarlist').css({top: '85px'});
  }
  else {
    $('.scrollbarlist').css({top: 'inherit'});
  }
});


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

//keeps the sidebar from scrolling too far down, uses a plugin
$(document).ready(function() {
  $('.scrollbar').scrollToFixed({ marginTop: 550, limit: $('.tags').offset().top - 100, dontSetWidth: true });
});



//dynamically create the sidebar from h3 links
$(document).ready(function() {
	$(function() {
		var list = $('.scrollbarlist');
    var i = 0;
		$('h3').each(function(index, element) {
  			$(list).append('<li id="scrollbarlink' + i + '"><a href="#' + $(this).attr('id') + '">' + $(this).text() + '</a></li>');
        i++;
      });
		});
  });

//login with LP API
$('#loginbtn').click(function (event) { //trigger the function when form is submitted
  var $form = $("#loginform"), //defining a bunch of variables based on form input
    actnum = $form.find("input[name='account_number']").val(),
    user = $form.find("input[name='user_name']").val(),
    pass = $form.find("input[name='password']").val();
  //call the domain API to get the domain for the login API
 $.get( 'https://api.liveperson.net/api/account/' + $(actnum).val() + '/service/agentVep/baseURI.json?version=1.0').done( (domainResponse) => {
      var domain = domainResponse.baseURI;
      //the actual post method to the Login API using the values from the form
    var posting = $.post(`https://${domain}/api/account/${actnum}/login?v=1.3`, { username: user, password: pass });
    posting.done(() => { //when posting is done, trigger this function
        $('.loginform').addClass('login-success'); //if 200, add this class
    }).fail(function () {
        $('.loginform').addClass('login-failed'); //otherwise, add this class
    });
  });

})
