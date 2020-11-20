
$(document).ready(function(){
  $('.nav_item').hover(function(){
    $('.menu_bg').addClass('on');
    $('.nav_bar').addClass('bottom_line');
  }  , function(){
    $('.menu_bg').removeClass('on');
    $('.nav_bar').removeClass('bottom_line');
  });

  $('.menu_icon_box').click(function(){
    
  const $clickd = $(this);
  if( $clickd.hasClass('rotate')) {
    $clickd.removeClass('rotate');
    $('.open_menu').removeClass('open');
    $('.nav_item').removeClass('show');
    $('.icon').removeClass('show');
  } else {
    $clickd.addClass('rotate');
    $('.open_menu').addClass('open');
    $('.nav_item').addClass('show');
    $('.icon').addClass('show');
  }
  })


 
});
