/* 点击账户 */
$('.own').click(function(){
    location.href = 'pages/register.html';
})
/* 点击购物车跳转 */
$('.to-cart').click(function(){
    location.href = './pages/cart.html';
})

/* 购物车数字显示 */
let cookie_str = $.cookie('cart') ? $.cookie('cart') : '';
let cookie_obj = $toObj(cookie_str);
let sum = 0;
for(let key in cookie_obj){
    let good_id = cookie_obj[key];
    sum += good_id.num;
}
$('.to-cart b').text(sum);

/* 获取tab里的数据 */
$.get('./index.json',(data)=>{
    /* console.log(data.tab); */
    data.tab.forEach((value,index)=>{
        let str = `
                <li class="detail">
                    <img src="${data.tab[index].src}">
                    <br>
                    <a href="#">${data.tab[index].a}</a>
                </li>
        `;
        $('.fore_list').eq(0).append(str);
        /* 点击商品进去详情页 */
        $('.detail').click(function(){
            location.href = './pages/list.html';
        })
    })
})

/* 点击分类出现左侧选项卡 */
let is_on = false;
$('.sort').click(function(){
    $('.cat_sublist').each(function(index,value){
        $(value).hide();
    })
    $('.cat_sublist').eq(0).show();
    is_on = !is_on;
    if(is_on){
        $('#tab').css('transform','translateX(0)');
    }else{
        $('#tab').css('transform','translateX(-605px)');
    }
})
/*  鼠标点击左侧内容栏   滑动出弹层 */
$('.float').each(function(index,value){
    $(value).click(function(){
        $(this).find('li').addClass("active");
        $(this).siblings().find('li').removeClass("active");
        var thisUB = $('.float').index($(this));
        $('.cat_subcont').addClass('active');
        $('.cat_sublist').hide();
        $('.cat_sublist').eq(thisUB).show();
    })
})