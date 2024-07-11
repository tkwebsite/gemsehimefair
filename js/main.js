$(function () {
    $(".top-slider").slick({
      autoplay: true,
      dots: false,
      fade: true,
      speed: 2000,
      autoplaySpeed: 4000, 
      pauseOnFocus: false, 
      pauseOnHover: false, 
      arrows: false,
    });
  });

  $(function () {
    $(".food-slider").slick({
      autoplay: true,
      dots: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: '<div class="slick-prev"></div>',
      nextArrow: '<div class="slick-next"></div>',
    });
  });

  $(document).ready(function() {
    // 検索フォームがサブミットされた後の処理
    $('#searchForm').submit(function() {
        // ページをリロード
        location.reload();
    });

    // ページがリロードされた後の処理
    $(window).on('load', function() {
        // searchResultまでスクロール
        $('html, body').animate({
            scrollTop: $('#searchResult').offset().top
        }, 'slow');
    });
});