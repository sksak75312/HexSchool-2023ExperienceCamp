import $ from 'jquery';


// 點擊漢堡排開、關閉清單
$('.header-mobile').on('click', function () {
  $('section').toggle();
  $('.tool-background').toggle();
  $('.header-mobile-menu').toggle();
  $('.header-mobile-close').toggle();
  $('.footer').toggle();
  $('.header-dropdown').slideToggle();
});



// 回頂部
$('.footer-rolltop').on('click', function () {
  $('html').animate({ scrollTop: 0 });
});
