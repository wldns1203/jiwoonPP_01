$(function(){

  // .box scroll
  var elm = ".box";
$(elm).each(function(index){
$(this).on("mousewheel DOMMouseScroll", function(e){
  e.preventDefault();
  var data = 0;
  if(event.wheelDelta){
    delta = event.wheelDelta;
  }
  var moveTop = $(window).scrollTop();
  console.log("moveTop : ",moveTop);
  var elmSelecter = $(elm).eq(index);
  if(delta < 0){
    if($(elmSelecter).next() != undefined){
      try{

        moveTop = $(elmSelecter).next().offset().top;
      }catch(e){}
    }
  }else{
    if($(elmSelecter).prev() != undefined){
      try{

        moveTop = $(elmSelecter).prev().offset().top;
      }catch(e){}
    }
  }
  $("html,body").stop().animate({scrollTop : moveTop + 'px'},700);
});
});


// scroll event
$(window).scroll(function(){

    // header back-color
    if($(document).scrollTop()>1&&$(document).scrollTop()<2600){
      $('header').css('background-color','rgba(255,255,255,0.8)');
      $('header .logo h1 a').css('color','#000');
      $('.menu_icon').attr('src','images/menu_iconbb.png');
      $('.login_icon').attr('src','images/login-iconbb.png');
      $('.my_icon').attr('src','images/shopping-bag.png');
      $('.search_icon').attr('src','images/searchbb.png');
    }else if($(document).scrollTop()>2600){
      $('header').css('background-color','#000');
      $('header .logo h1 a').css('color','#fff');
      $('.menu_icon').attr('src','images/menu_iconbw.png');
      $('.login_icon').attr('src','images/login-iconbw.png');
      $('.my_icon').attr('src','images/shopping-bagw.png');
      $('.search_icon').attr('src','images/searchbw.png');
    }else{
      $('header').css('background-color','rgba(255,255,255,1)');
      $('header .logo h1 a').css('color','#000');
      $('.menu_icon').attr('src','images/menu_iconbb.png');
      $('.login_icon').attr('src','images/login-iconbb.png');
      $('.my_icon').attr('src','images/shopping-bag.png');
      $('.search_icon').attr('src','images/searchbb.png');
    }


  // section-contents
  // $('.contents-back').hide();
  // if($(document).scrollTop()>900){
  //   $('.contents-back').stop().fadeIn(600);
  // }
  $('#contents').css('opacity','0');
  if($(document).scrollTop()>200){
    $('#contents').stop().addClass('fade03');
  }else{
    $('#contents').stop().removeClass('fade03');
    $('#contents').stop().addClass('fade02');
  }

  // world back-image
  if($(document).scrollTop()==1874){
      $('.world-back01').addClass('world-back01-move');
      $('.wcont01').addClass('wcont01-move');
      $('#wtop').addClass('wtopline');
      $('#wbottom').addClass('wbottomline');
     }else{
      $('.world-back01').removeClass('world-back01-move');
      $('.wcont01').removeClass('wcont01-move');
      $('#wtop').removeClass('wtopline');
      $('#wbottom').removeClass('wbottomline');
      }

  // news background image
  // $('.news-back').hide();
  // if($(document).scrollTop()>1900){
  //   $('.news-back').stop().fadeIn(600);
  // }

  // #letter
  $('.news-letter').css('opacity','0.1');
  if($(document).scrollTop()>=1700){
    $('.news-letter').addClass('fade01');
  }else{
    $('.news-letter').removeClass('fade01');
  }
  $('.news-letter').mouseenter(function(){
    $('.news-letter').removeClass('fade01');
    $('.news-letter').css('opacity','1');
  });

  // footer-line
  // let footer = $("#footer").offset().top;
  // console.log(footer);
  if($(document).scrollTop()>3000){
    $('#fline01').addClass('foot-wrap-line01');
    $('#fline02').addClass('foot-wrap-line02');
  }else{
    $('#fline01').removeClass('foot-wrap-line01');
    $('#fline02').removeClass('foot-wrap-line02');
  }

  // footer top-btn
  if($(document).scrollTop()>100){
  $('#up, .upbtn-text').show(500);
}else{
  $('#up, .upbtn-text').hide();
}

  // scroll down button
  if($(document).scrollTop()>2000){
  $('#scrollDown').fadeOut(500);
  }else{
    $('#scrollDown').fadeIn(300);
  }

if($(document).scrollTop()<900){
$('.down a').css('color','#000');
$('#scrollDown a span').css('border-left','1px solid #000').css('border-bottom','1px solid #000');
}else if($(document).scrollTop()>900&&$(document).scrollTop()<1000){
$('.down a').css('color','#ccc');
$('#scrollDown a span').css('border-left','1px solid #ccc').css('border-bottom','1px solid #ccc');
}else if($(document).scrollTop()>1000&&$(document).scrollTop()<2000){
  $('.down a').css('color','#000');
  $('#scrollDown a span').css('border-left','1px solid #000').css('border-bottom','1px solid #000');
}

if($(document).scrollTop()==2811){
$('.cs-list li').each(function(eq){
  var lio=$(this);
  setTimeout(function(){
    lio.addClass('lio');
  }, eq*300);
});
}
if($(document).scrollTop()<2811){
$('.cs-list li').each(function(eq){
  var lio=$(this);
  lio.removeClass('lio');
});
}





// scrollevent end
});

// collection scrollDown click
let num = 1;
$('#scrollDown').click(function(){
  num++;
  scDown(num);
});
function scDown(seq){
  console.log(seq);
  var scoffset = $('.box'+ seq).offset();
  $('html, body').animate({scrollTop : scoffset.top}, 800);
}

// scroll upbutton click
$('#up, .upbtn-text').click(function(){
  num=1;
  up('1');
});
function up(seq){
  var upoffset = $('.box'+ seq).offset();
  $('html, body').animate({scrollTop : upoffset.top}, 800);
}





  // search box
  $('.search-box').hide();
  $('.search-icon img').click(function(){
    $('.search-box').stop().slideDown(500);
    $('#back_layer02').fadeIn(300);
    $('.search-icon').addClass('fade03');

    $('header').css('background-color','#fff');
    $('header .logo h1 a').css('color','#000');
    $('.menu_icon').attr('src','images/menu_iconbb.png');
    $('.login_icon').attr('src','images/login-iconbb.png');
    $('.my_icon').attr('src','images/shopping-bag.png');
    $('.search_icon').attr('src','images/searchbb.png');

  });
  $('.search-box .close, #back_layer02, #back_layer01, .menu_icon, .login_icon, .my_icon').click(function(){
    $('.search-box').stop().slideUp(600);
    $('#back_layer02').fadeOut(300);
    $('.search-icon').removeClass('fade03');
  });



  // search box new product slide-fade
  var current01 = 0;
  setInterval(function(){
    var next01 = (current01+1)%5
    $('.new-product-list').find('div').eq(current01).fadeOut(700);
    $('.new-product-list').find('div').eq(next01).fadeIn(700);
    current01=next01
  },5000);



  // search box new right-image tipbox
  // 1
  var tipbox01 = document.getElementsByClassName("tipbox01")[0];
  var tipTxt01 = document.getElementsByClassName("tiptext01")[0];
  tipbox01.addEventListener('mousemove', function(e){
    console.log("e.clientX : "+e.clientX);
    console.log("e.clientY : "+e.clientY);
    tipTxt01.style.left = (e.clientX -550) + 'px'; tipTxt01.style.top = (e.clientY - 250) + 'px';
  });
  tipbox01.addEventListener('click', function(e){
     if (tipTxt01.style.display === 'none'){
        tipTxt01.style.display = "block";
      } else {
         tipTxt01.style.display = "none";
       }
     });
      // 2
       var tipbox02 = document.getElementsByClassName("tipbox02")[0];
       var tipTxt02 = document.getElementsByClassName("tiptext02")[0];
       tipbox02.addEventListener('mousemove', function(e){
         console.log("e.clientX : "+e.clientX);
         console.log("e.clientY : "+e.clientY);
         tipTxt02.style.left = (e.clientX -730) + 'px'; tipTxt02.style.top = (e.clientY - 250) + 'px';
       });
       tipbox02.addEventListener('click', function(e){
          if (tipTxt02.style.display === 'none'){
             tipTxt02.style.display = "block";
           } else {
              tipTxt02.style.display = "none";
            }
          });
          // 3
           var tipbox03 = document.getElementsByClassName("tipbox03")[0];
           var tipTxt03 = document.getElementsByClassName("tiptext03")[0];
           tipbox03.addEventListener('mousemove', function(e){
             console.log("e.clientX : "+e.clientX);
             console.log("e.clientY : "+e.clientY);
             tipTxt03.style.left = (e.clientX -870) + 'px'; tipTxt03.style.top = (e.clientY - 250) + 'px';
           });
           tipbox03.addEventListener('click', function(e){
              if (tipTxt03.style.display === 'none'){
                 tipTxt03.style.display = "block";
               } else {
                  tipTxt03.style.display = "none";
                }
              });
              // 4
               var tipbox04 = document.getElementsByClassName("tipbox04")[0];
               var tipTxt04 = document.getElementsByClassName("tiptext04")[0];
               tipbox04.addEventListener('mousemove', function(e){
                 console.log("e.clientX : "+e.clientX);
                 console.log("e.clientY : "+e.clientY);
                 tipTxt04.style.left = (e.clientX -1030) + 'px'; tipTxt04.style.top = (e.clientY - 250) + 'px';
               });
               tipbox04.addEventListener('click', function(e){
                  if (tipTxt04.style.display === 'none'){
                     tipTxt04.style.display = "block";
                   } else {
                      tipTxt04.style.display = "none";
                    }
                  });





  // search list
  $('input').click(function(){
    $('.search-list').stop().slideDown(400);
  });
  $('.search-list').mouseleave(function(){
    $('.search-list').stop().slideUp(700);
  });

  // search list image fade
  $('.list-img li').css('opacity','0');

  $('.a01').mouseenter(function(){
    $('.img01').removeClass('fade02');
    $('.img01').addClass('fade03');
    $('.img02, .img03, .img04, .img05, .img06, .img07').addClass('fade02');
  });
  $('.a01').mouseleave(function(){
    $('.img01').removeClass('fade03');
    $('.img01').addClass('fade02');
  });

  $('.a02').mouseenter(function(){
    $('.img02').removeClass('fade02');
    $('.img02').addClass('fade03');
    $('.img01, .img03, .img04, .img05, .img06, .img07').addClass('fade02');
  });
  $('.a02').mouseleave(function(){
    $('.img02').removeClass('fade03');
    $('.img02').addClass('fade02');
  });

  $('.a03').mouseenter(function(){
    $('.img03').removeClass('fade02');
    $('.img03').addClass('fade03');
    $('.img01, .img02, .img04, .img05, .img06, .img07').addClass('fade02');
  });
  $('.a03').mouseleave(function(){
    $('.img03').removeClass('fade03');
    $('.img03').addClass('fade02');
  });

  $('.a04').mouseenter(function(){
    $('.img04').removeClass('fade02');
    $('.img04').addClass('fade03');
    $('.img01, .img03, .img02, .img05, .img06, .img07').addClass('fade02');
  });
  $('.a04').mouseleave(function(){
    $('.img04').removeClass('fade03');
    $('.img04').addClass('fade02');
  });

  $('.a05').mouseenter(function(){
    $('.img05').removeClass('fade02');
    $('.img05').addClass('fade03');
    $('.img01, .img03, .img02, .img04, .img06, .img07').addClass('fade02');
  });
  $('.a05').mouseleave(function(){
    $('.img05').removeClass('fade03');
    $('.img05').addClass('fade02');
  });

  $('.a06').mouseenter(function(){
    $('.img06').removeClass('fade02');
    $('.img06').addClass('fade03');
    $('.img01, .img03, .img02, .img05, .img04, .img07').addClass('fade02');
  });
  $('.a06').mouseleave(function(){
    $('.img06').removeClass('fade03');
    $('.img06').addClass('fade02');
  });

  $('.a07').mouseenter(function(){
    $('.img07').removeClass('fade02');
    $('.img07').addClass('fade03');
    $('.img01, .img03, .img02, .img05, .img06, .img04').addClass('fade02');
  });
  $('.a07').mouseleave(function(){
    $('.img07').removeClass('fade03');
    $('.img07').addClass('fade02');
  });





  // side menu #aside01
  var $aside = $('#aside01'),
      $button = $('.menu_icon'),
      $duration = 900;

      $button.click(function(){
        $('header').css('background-color','rgba(0,0,0,1)');
        $('header .logo h1 a').css('color','#fff');
        $('.menu_icon').attr('src','images/menu_iconbw.png');
        $('.login_icon').attr('src','images/login-iconbw.png');
        $('.my_icon').attr('src','images/shopping-bagw.png');
        $('.search_icon').attr('src','images/searchbw.png');

        $aside.toggleClass('open');
        if($aside.hasClass('open')){
          $('#back_layer').stop().fadeIn(300);
          $aside.stop().animate({left:'25%'},$duration);
          $button.attr('src','images/menu_close_iconbw.png');
        }else{
          $('#back_layer').stop().fadeOut(300);
          $aside.stop().animate({left:'-50%'},$duration);
          $button.attr('src','images/menu_iconbw.png');
        }
      });
      $('#back_layer, .login_icon, .my_icon, .search-icon img').click(function(){
        $('#back_layer').stop().fadeOut(300);
        $aside.stop().animate({left:'-50%'},$duration);
        // $button.attr('src','images/menu_iconbw.png');
      });

  // #aside01 menu fade
$('.menuImg01').click(function(){
  $('.sub02').stop().fadeOut(300);
  $('.sub01').stop().fadeIn(500);
  $('.menuImg02').css("opacity","0.05");
  $('.menuImg01').css("width","70%").css("height","70%").css("margin-top","10%");
  $('.menuImg01').addClass('hover');
  $('.menuImg02').css("width","100%").css("height","95%").css("margin-left","0").css("margin-top","0");
  });
$('.menuw-close, .menu_icon').click(function(){
  $('.sub01').stop().fadeOut(300);
  $('.menuImg02').css("opacity","1");
  $('.menuImg01').css("width","100%").css("height","95%").css("margin-top","0");
  $('.menuImg01').removeClass('hover');
});
$('.menuImg02').click(function(){
  $('.sub01').stop().fadeOut(300);
  $('.sub02').stop().fadeIn(500);
  $('.menuImg01').css("opacity","0.05");
  $('.menuImg02').css("width","70%").css("height","70%").css("margin-left","30%").css("margin-top","10%");
  $('.menuImg02').addClass('hover');
  $('.menuImg01').css("width","100%").css("height","95%").css("margin-top","0");
});
$('.menum-close, .menu_icon').click(function(){
  $('.sub02').stop().fadeOut(300);
  $('.menuImg01').css("opacity","1");
  $('.menuImg02').css("width","100%").css("height","95%").css("margin-left","0").css("margin-top","0");
  $('.menuImg02').removeClass('hover');
});

// submenu01
$('.sub01 li').click(function(){
  $(this).find('.submenu01').stop().slideDown(900);
  $(this).siblings().find('.submenu01').stop().fadeOut(500);
  $(this).find('a h4').css('font-size','1.4em').css('font-weight','bold').css('color','#395cd9');
  $(this).siblings().find('a h4').css('font-size','1.1em').css('font-weight','lighter').css('color','#fff');

});
$('.menuw-close, .menu_icon').click(function(){
  $('.sub01 li a h4').css('font-weight','lighter').css('font-size','1.1em').css('color','#fff');
  $('.submenu01, .submenu02').fadeOut(500);
});
 // submenu02
$('.sub02 li').click(function(){
  $(this).find('.submenu02').stop().slideDown(900);
  $(this).siblings().find('.submenu02').stop().fadeOut(500);
  $(this).find('a h4').css('font-size','1.4em').css('font-weight','bold').css('color','#395cd9');
  $(this).siblings().find('a h4').css('font-size','1.1em').css('font-weight','lighter').css('color','#fff');

});
$('.menum-close, .menu_icon').click(function(){
  $('.sub02 li a h4').css('font-weight','lighter').css('font-size','1.1em').css('color','#fff');
  $('.submenu01, .submenu02').fadeOut(500);
});





// aside02 log-in
  var $aside02 = $('#aside02'),
      $button02 = $('.login_icon'),
      $duration02 = 700;

      $button02.click(function(){
      $aside02.stop().animate({left:'0.01%'},$duration);
      $('.menu li.login').addClass('fade03');

      $('header').css('background-color','rgba(0,0,0,1)');
      $('header .logo h1 a').css('color','#fff');
      $('.menu_icon').attr('src','images/menu_iconbw.png');
      $('.login_icon').attr('src','images/login-iconbw.png');
      $('.my_icon').attr('src','images/shopping-bagw.png');
      $('.search_icon').attr('src','images/searchbw.png');

      });

      $('.login-close, .menu_icon, .my_icon, .search-icon img').click(function(){
        $aside02.stop().animate({left:'-27%'},$duration02);
        $('.menu li.login').removeClass('fade03');
      });

// side menu aside03 My shopping
var $aside03 = $('#aside03'),
    $button03 = $('.my_icon'),
    $duration03 = 700;

    $button03.click(function(){
    $aside03.stop().animate({left:'0.01%'},$duration03);
    $('.menu li.my').addClass('fade03');

    $('header').css('background-color','rgba(0,0,0,1)');
    $('header .logo h1 a').css('color','#fff');
    $('.menu_icon').attr('src','images/menu_iconbw.png');
    $('.login_icon').attr('src','images/login-iconbw.png');
    $('.my_icon').attr('src','images/shopping-bagw.png');
    $('.search_icon').attr('src','images/searchbw.png');

    });

    $('.cart-close, .menu_icon, .login_icon, .search-icon img').click(function(){
      $aside03.stop().animate({left:'-27%'},$duration03);
      $('.menu li.my').removeClass('fade03');
    });



  // slide stop/move
  $('.slideImg img').mouseenter(function(){
  $('.slideList-move').css('animation-play-state','paused');
  });
  $('.slideImg img').mouseleave(function(){
    $('.slideList-move').css('animation-play-state','running');
  });




  // section world mouseenter back change
  $('.ko, .sa').mouseenter(function(){
    $('.world-back').removeClass('world-back01');
    $('.world-back').addClass('world-back-enter');
  });
  $('.ko, .sa').mouseleave(function(){
    $('.world-back').removeClass('world-back-enter');
    $('.world-back').addClass('world-back01');
  });



  // gift selection img slide
  // gtop
  var gtopCount = $('#gtop .gtop-list .gtop-img').length;
  var gtopWidth = $('#gtop .gtop-list .gtop-img').width();
  var gtopListWidth = gtopCount = gtopWidth;

  $('#gtop .gtop-list .gtop-img:last-child').prependTo('#gtop .gtop-list');

  function moveLeft01(){
    $('#gtop .gtop-list').animate({
      left: + gtopWidth
    },50, function(){
      $('#gtop .gtop-list .gtop-img:last-child').prependTo('#gtop .gtop-list');
      $('#gtop .gtop-list').css('left','');
    });
  };

  function moveRight01(){
    $('#gtop .gtop-list').animate({
      left: - gtopWidth
    },50, function(){
      $('#gtop .gtop-list .gtop-img:first-child').appendTo('#gtop .gtop-list');
      $('#gtop .gtop-list').css('left','');
    });
  };

  $('.tlt').click(function(){
    moveLeft01();
  });
  $('.trt').click(function(){
    moveRight01();
  });

  // gbottom
  var gbotCount = $('#gbottom .gbottom-list .gbottom-img').length;
  var gbotWidth = $('#gbottom .gbottom-list .gbottom-img').width();
  var gbotListWidth = gbotCount = gbotWidth;

  $('#gbottom .gbottom-list .gbottom-img:last-child').prependTo('#gbottom .gbottom-list');

  function moveLeft02(){
    $('#gbottom .gbottom-list').animate({
      left: + gbotWidth
    },50, function(){
      $('#gbottom .gbottom-list .gbottom-img:last-child').prependTo('#gbottom .gbottom-list');
      $('#gbottom .gbottom-list').css('left','');
    });
  };

  function moveRight02(){
    $('#gbottom .gbottom-list').animate({
      left: - gbotWidth
    },50, function(){
      $('#gbottom .gbottom-list .gbottom-img:first-child').appendTo('#gbottom .gbottom-list');
      $('#gbottom .gbottom-list').css('left','');
    });
  };

  $('.blt').click(function(){
    moveLeft02();
  });
  $('.brt').click(function(){
    moveRight02();
  });

  // news .now click
  // side menu aside04 chat
  var $aside04 = $('#aside04'),
      $button04 = $('.cs-list li p, .news-back'),
      $duration04 = 800;

      $button04.click(function(){

        if($('.cs-list li p').hasClass('now')){
          $('.news-back').addClass('nbmove');
        $aside04.stop().animate({left:'0.01em'},$duration04);

      }else{
        $aside04.stop().animate({left:'-26em'},$duration04);
        $('.news-back').removeClass('nbmove');
      }

    });

      $('.now-close, .menu_icon, .login_icon, .search-icon img, .my_icon').click(function(){
        $aside04.stop().animate({left:'-26em'},$duration04);
        $('.news-back').removeClass('nbmove');
        $('.chat').removeClass('fade04');
      });


    function getDate(){
        const date = new Date();
        const hours = date.getHours();
        // const m = date.getMinutes();
        const csId = $('.cs-list li span').attr('id');

        if(hours>=csId){
          $('ul.cs-list li p').removeClass('no');
          $('ul.cs-list li p').addClass('now');
          if(hours>=21){
            $('ul.cs-list li p').removeClass('now');
            $('ul.cs-list li p').addClass('no');
          }
        }

    }
    getDate();


  // aside04 chat-box show timer
  function timeout01() {
    $('.chat01').addClass('fade04');
  }
  function timeout02() {
    $('.chat02').addClass('fade04');
  }
  function timeout03() {
    $('.chat03').addClass('fade04');
  }

  $('.cs-list li p, .news-back').click(function(){
    setTimeout(timeout01,500);
    setTimeout(timeout02,1000);
    setTimeout(timeout03,1500);
  });

  // #inputButton click
  $('#inputButton').click(function(){
    var result = $('#input01').val();
    console.log(result);
    $('#input02').text(result);
    $('.chat04').addClass('fade04');
    $('#input01').clear();
  });



  // news-letter popup
  $('.nsee').click(function(){
    $('.news-popup').fadeIn(500);
    $('#back_layer').fadeIn(500);
  });
  $('.pa, #back_layer').click(function(){
    $('.news-popup').fadeOut(500);
    $('#back_layer').fadeOut(500);
  });





// end
});
