import $ from 'jquery';

// 定價頁的問題開關
$('.pr-question-list-item').on('click', function () {
  $(this).toggleClass('pr-question-active');
  $(this).find('.add-icon').toggle();
  $(this).find('.remove-icon').toggle();
  $(this).find('.pr-question-list-content').slideToggle();
});
