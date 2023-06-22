import $ from 'jquery';


// 點擊漢堡排開、關閉清單
$('.header-mobile').on('click', function () {
  $('.header-mobile-menu').toggle();
  $('.header-mobile-close').toggle();
  $('.header-dropdown').slideToggle();
  $('body').toggleClass('disable-scroll-y');

  // 舊程式碼，目前已修改成上方隱藏 scroll Y軸
  // $('section').toggle();
  // $('.tool-background').toggle();
  // $('.footer').toggle();
});



// 回頂部
$('.footer-rolltop').on('click', function () {
  $('html').animate({ scrollTop: 0 });
});
