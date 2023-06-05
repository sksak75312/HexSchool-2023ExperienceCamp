import $ from 'jquery';
import axios from 'axios';

let data = [];
let pageData = {};
let sort ;
let page = 1 ;
let type = '';
let search = ''; 

const getData = () => {
  axios
    .get(`https://2023-engineer-camp.zeabur.app/api/v1/works?sort=${sort}&type=${type}&search=${search}&page=${page}`)
    .then((res) => {
      console.log(res);
      data = res.data.ai_works.data;
      pageData = res.data.ai_works.page;
      console.log(pageData);
      dataHandler();
      pageHandler();
    })

    .catch((error) => {
      console.log(error);
    });
}

// 渲染每一筆資料
const dataHandler = () => {
  let html = '';
  if (data.length === 0) {
    html = `<p>此分類暫無商品</p>`
  } else {
    data.forEach((item) => {
      html += `<li class="tools-list-item">
              <div class="tools-list-img"><img src="${item.imageUrl}" alt=""></div>
              <div class="tools-list-body">
                <h2>${item.title}</h2>
                <p>${item.description}</p>
              </div>
              <div class="tools-list-footer">
                <div class="tools-list-data">
                  <h3 class="tools-list-ai">AI 模型</h3>
                  <span>${item.model}</span>
                </div>
                <div class="tools-list-data">
                  <span>#${item.type}</span>
                  <a href="${item.link}" class="material-icons" target="_blank">
                    share
                  </a>
                </div>
              </div>
            </li>`;
          });
        }
  $('.tools-list').html(html);
};


// 渲染分頁數
const pageHandler = () => {
  let html = '';
  for (let i = 0; i < pageData.total_pages; i++) {
    html += `<li class="tools-pages-item"><button class="${
     i + 1 === Number(page)  ? 'tools-page-active' : ''
    }">${i + 1}</button></li>`;
  }

  pageData.has_next ? html += `<li class="tools-pages-item" >
            <button type="button">
              <span class="material-icons">
                keyboard_arrow_right
              </span>
            </button>
          </li>`: '';

  $('.tools-pages').html(html);
};


// 搜尋區塊
$('.tools-search-box').on('keyup', function() {
  search = $('.tools-search-box').val();
  getData();
});



// 工具 篩選 切換開、關閉，並判斷另一個是否開啟
$('.tools-filter-btn').on('click', function (){

  if ($('.tools-row-btn').hasClass('tools-button-active')) {
    $('.tools-row-dropdown').slideToggle();
    $('.tools-row-btn').toggleClass('tools-button-active');
  }

  $(this).toggleClass('tools-button-active');
  $('.tools-filter-dropdown').slideToggle();
});

// 替換 篩選 的文字
$('.tools-filter-dropdown-text').on('click', function () {
  $('.tools-filter-text').text($(this).text());
  $('.tools-filter-dropdown').slideToggle();
  $('.tools-filter-btn').toggleClass('tools-button-active');
});



// 工具 排序 切換開、關閉，並判斷另一個是否開啟
$('.tools-row-btn').on('click', function () {

  if ($('.tools-filter-btn').hasClass('tools-button-active')) {
    $('.tools-filter-dropdown').slideToggle();
    $('.tools-filter-btn').toggleClass('tools-button-active');
  }

  $(this).toggleClass('tools-button-active');
  $('.tools-row-dropdown').slideToggle();
});

// 替換 排序 的文字
$('.tools-row-dropdown-text').on('click', function () {
  $('.tools-row-text').text($(this).text());
  $('.tools-row-dropdown').slideToggle();
  $('.tools-row-btn').toggleClass('tools-button-active');
  $('.tools-row-text').text() === '由舊到新'? sort = 1 : sort = 0
  getData();
});




// 類型選擇
$('.tools-sort-item').on('click', function() {
  $('.tools-sort-item').removeClass('tools-sort-item--active');
  $(this).text() === '全部' ? type = '' : (type = $(this).text());
  $(this).addClass('tools-sort-item--active');
  page = 1;
  getData();
});


// 分頁切換
$('.tools-pages').on('click','.tools-pages-item' ,function () {
  if ($(this).text().trim() === 'keyboard_arrow_right') {
    page++
  } else {
    page = $(this).text();
  } 
  getData();
});

getData();
