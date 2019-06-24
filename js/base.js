var html = '';
html = `<div  class="header">
<a href="#screen-1" class="header__logo">最新电影</a>
<nav class="header__nav">
  <a href="index.html" class="header__nav-item header__nav-item_status_active header__nav-item_i_1">首页</a>
  <a href="pingdao.html" class="header__nav-item header__nav-item_i_2">频道</a>
  <a href="muhou.html" class="header__nav-item header__nav-item_i_3">幕后</a>
  <a href="seminar.html" class="header__nav-item header__nav-item_i_4">专题</a>
  <a href="shaky.html" class="header__nav-item header__nav-item_i_5">活动</a>
  <div class="header__nav-item-tip"></div>
</nav>
</div>`;
$('header').append(html);
html = '';
html = `<div class="footer">
<div class="fo-one">
    <p>客户端</p>
    <p>媒体报道</p>
    <p>合作推广</p>
    <p>关于我们</p>
    <p>加入我们</p>
    <p>最新电影</p>
    <p>更多友情链接</p>
  </div>
  <div class="fo-two">
    <p>Copyright © 2019</p>
  </div>
</div>`;
$('footer').append(html);
html = '';
var headPhoto = $(".header");
$(window).on('scroll', function () {
  if ($(window).scrollTop() > $(window).height()-800){
    headPhoto.addClass('headeractive');
  }
  else{
    headPhoto.removeClass('headeractive');
  }
});
$(window).trigger('scroll');
