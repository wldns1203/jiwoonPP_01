$(function(){

  // header shadow
  $(window).scroll(function(){
    if($(document).scrollTop()>1){
      $('header').css('box-shadow','0 0 5px #ccc').css('opacity','0.9');
    }else{
      $('header').css('box-shadow','none').css('opacity','1');
    }
  });


  // side menu #aside01
  var $aside = $('#aside01'),
      $button = $('.menu_icon'),
      $duration = 700;

      $button.click(function(){
        $('#back_layer').stop().fadeIn(300);
        $aside.stop().animate({left:'25%'},$duration);
      });

      $('.menu_close, #back_layer, .login_icon, .my_icon, .search img').click(function(){
        $('#back_layer').stop().fadeOut(300);
        $aside.stop().animate({left:'-50%'},$duration);
      });

  // #aside01 menu fade
$('.menuw, .sub01').mouseenter(function(){
  $('.sub01').stop().fadeIn(500);
  $('.menuImg02').css("opacity","0.15");
  $('.menuImg01').css("width","85%").css("height","85%").css("margin-top","10%");
});
$('.menuw, .sub01').mouseleave(function(){
  $('.sub01').stop().fadeOut(300);
  $('.menuImg02').css("opacity","1");
  $('.menuImg01').css("width","95%").css("height","95%").css("margin-top","0");
});
$('.menum, .sub02').mouseenter(function(){
$('.sub02').stop().fadeIn(500);
$('.menuImg01').css("opacity","0.15");
$('.menuImg02').css("width","85%").css("height","85%").css("margin-left","10%").css("margin-top","10%");
});
$('.menum, .sub02').mouseleave(function(){
$('.sub02').stop().fadeOut(300);
$('.menuImg01').css("opacity","1");
$('.menuImg02').css("width","95%").css("height","95%").css("margin-left","0").css("margin-top","0");
});








  // end
});
