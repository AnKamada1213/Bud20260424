$(function() {

  // 既存 inview（そのまま）
  $('.inviewfadeInUp').on('inview', function(event, isInView) {
    var delay = $(this).attr("data-delay");
    if (isInView) {
      $(this).delay(delay).queue(function(){
        $(this).stop().addClass('fadeInUp');
      });
    }
  });


});