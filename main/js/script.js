// ハンバーガーメニュー開閉
$(function(){
    let dw=$('header nav');
    let bg=$('.burger');

    bg.on('click',function(){
        $(this).toggleClass('active');
        dw.toggleClass('drawer');
        // console.log('burger OK');
    });
    dw.on('click',function(){
        $(this).toggleClass('drawer');
        bg.toggleClass('active');
        // $('h1').css('color','blue');
        // $('p').css('color','blue');
        // $(".logo p").text("書き換えました");
        // console.log('nav OK');
    });
});

// アコーデオンの開閉制御
$(function(){
    let dt=$('.accordion dt');
    let dd=$('.accordion dd');
    dd.hide();/* ddを非表示 */
    dt.on('click',function(){
    // console.log('click!');
        $(this).next().slideToggle();
        dd.not($(this).next()).slideUp();

        $(this).toggleClass('current');
        dt.not($(this)).removeClass('current');
    });
});


 //  ***** Call To Actionを、一定時間後に発動させる　設定 *****    
 $(function(){
    function callBack(){
        $('#attention').fadeIn();
    }
    setTimeout(callBack,300);
    
    // if($.cookie('access')){
        //既にアクセス済みの場合はカーテンを非表示
        // $('#attention').hide();
    // }else{
        //初アクセスの場合はカーテンをfadeOutさせる
        // $('#attention').fadeIn();
        // setTimeout(callBack,3000);
            // $('#curtain').delay(4000).fadeOut(400);
        // }
        // カーテン を以下目は見せるが２回目以降は見せない処理を加える
        // $('#curtain').delay(4500).fadeOut(1000);



    $('.close').on('click',function(){
        $('#attention').fadeOut();
    });

    $('.pr_btn').on('click',function(){
        $('#attention').fadeOut();
        // aタグなのに「return false」を書かないのは#bgをフェードアウト後のJumpしたいため 
    });
    $('#attention').on('click',function(){
        $(this).fadeOut();
    });
    $('.popup').on('click',function(e){
        e.stopPropagation();
    });
});

// video　コントロールをマウスオンしたとき表示にする
$(function(){
    var $video = $('video-boxes');
    var video = $video.get(0);
 
    $video.mouseover(
    function() {
        video.setAttribute("controls", "controls");
    }).mouseout(
    function() {
        video.removeAttribute("controls")
    });
});

// サブ画面のTOPに戻るボタン
$('#top').on('click',function(){
    $('html,body').animate({scrollTop:0},500);
  });

  $(window).on('scroll',function(){

    const scl=$(this).scrollTop();
    console.log(scl);
    if(scl>400){
      $('#top').fadeIn();
    }
    else{
      $('#top').fadeOut();
    }
    
  });


