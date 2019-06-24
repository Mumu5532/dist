var html = '';
var msg = [{
    imgurl:'images/file/shaky/dwj.jpg',
    title:'第五届NEW VISION毕业季影像展',
    zhushi:'报名中',
    date:'2019.5.23-2019.9.18'
},{
    imgurl:'images/file/shaky/hyr.jpg',
    title:'#话题福利# 科幻片中，哪些脑洞...',
    zhushi:'进行中',
    date:'2019.6.13-2019.6.18'
},{
    imgurl:'images/file/shaky/dsj.jpg',
    title:'第四届NEW ERA青年电影季命题单...',
    zhushi:'进行中',
    date:'2019.6.12-2019.7.10'
},{
    imgurl:'images/file/shaky/fq.jpg',
    title:'#话题# 哪个瞬间你感觉到父亲真...',
    zhushi:'已结束',
    date:'2019.6.11-2019.6.16'
},{
    imgurl:'images/file/shaky/mw.jpg',
    title:'#话题#漫威十年英雄梦，曾对你有...',
    zhushi:'已结束',
    date:'2019.6.12-2019.7.10'
},{
    imgurl:'images/file/shaky/mq.jpg',
    title:'征集 | 写给母亲的一封信',
    zhushi:'已结束',
    date:'2019.4.23-2019.5.8'
},{
    imgurl:'images/file/shaky/dhr.jpg',
    title:'动画人的盛会！第二届中国青年动...',
    zhushi:'已结束',
    date:'2019.4.28日'
},{
    imgurl:'images/file/shaky/jwt.jpg',
    title:'#话题#你的室友都干过哪些惊为天...',
    zhushi:'已结束',
    date:'2019.3.28-4.10'
},{
    imgurl:'images/file/shaky/qrj.jpg',
    title:'情人节扎心一问| 给你一个偷偷心...',
    zhushi:'已结束',
    date:'2019.2.13-2.20'
}]
var msglen = msg.length;
$('.sa-content').empty();
for(let i=0;i<msglen;i++){
    let arr = msg[i];
    html += `<div class="sa-pre">
    <img src="${arr.imgurl}" alt="">
<p class="fone">${arr.title}<span class="do"> ${arr.zhushi}</span></p>
    <p class="date">${arr.date}</p>
  </div>`;
}
$('.sa-content').append(html);