/*Portfolio*/

$(document).ready(function() {
    $('.button[filter]').click(function(){
       if($(this).attr('filter')=='all') {
         if($(this).attr('val')=='off') {
             $('.button[filter]').attr('val', 'off');
             $(this).attr('val', 'on');
             $('.button[filter]').removeClass('focused');
             $(this).addClass('focused');
             $('.filter > div').show(300);
         }
       } else
       if($(this).attr('val')=='off') {
           $('.button[filter]').attr('val', 'off');
           $(this).attr('val', 'on');
           $('.button[filter]').removeClass('focused');
           $(this).addClass('focused');
           $('.filter > div').hide(300);
           var filter = $(this).attr('filter');
           $('.filter > div[filter='+filter+']').show(300);
       }
    })
});

/*Slider*/

$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrow: false,
  dots: true,
  dotsClass: 'dots-style',
  prevArrow: false,
  nextArrow: false
});
