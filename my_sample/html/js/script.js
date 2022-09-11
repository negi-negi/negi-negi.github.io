$(function(){

    const top = $('.toTop');
    top.hide();
    // toTop definition
  
    const brg = $('.burger');
    const nav = $('.nav');
    const bg = $('.bg');
  
  
    top.click(function(){
      $('html,body').animate({'scrollTop':0},500);
    });
  
    $(window).scroll(function(){
      let scl = $(this).scrollTop();
  
      if(scl > 200){
        top.fadeIn();
      }else{
        top.fadeOut();
      }
    });
  
  
    brg.click(function(){
      nav.toggleClass('drawer');
      $(this).toggleClass('active');
      if(nav.hasClass('drawer')){
        bg.fadeIn();
      }else{
        bg.fadeOut();
      }
    });
  
    bg.click(function(){
      nav.removeClass('drawer');
      $(this).fadeOut();
      brg.removeClass('active');
    });
  
  
    $(window).resize(function(){
      if($(this).width()>768){
        bg.hide();
      }
  
    });
  
  
  });