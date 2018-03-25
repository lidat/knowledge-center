//keeps the sidebar from scrolling too far down, uses a plugin
$(document).ready(function() {
  $(".scrollbar").scrollToFixed({
    marginTop: 550,
    limit: $(".tags").offset().top - 100,
    dontSetWidth: true
  });
});
