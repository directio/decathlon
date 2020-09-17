/* 点击小图切换商品 */
$('.small-img').each((index,value)=>{
    $(value).click(function(){
        $('.big img').hide();
        $('.big img').eq(index).show();
        $('.small-img').css('border','none');
        $(this).css('border', '2px solid #0082c3');
        $('.number').text(index + 1);
    })
})
/* 点击加入购物车事件 */
$('.cart').click(function(){
    /* 头部显示添加购物车成功 */
    $('.to-cart').css('opacity', 1);
    let timer = setTimeout(()=>{
        $('.to-cart').css({
            'opacity' : 0,
            'transition' : 'all .5s'
        });
    },2000);
    /* 获取json数据，放在购物车页面 */
    $.getJSON('../index.json',(data)=>{
        console.log(data.carts);
        let cookie_str = $.cookie('cart') ? $.cookie('cart') : '';
        let cookie_obj = $toObj(cookie_str);
        let good_id = $(this).attr('data-decathlon-id');
        if(good_id in cookie_obj){
            cookie_obj[good_id].num++;
        }else{
            cookie_obj[good_id] = {
                "src" : data.carts[0].src,
                "type" : data.carts[0].type,
                "number" : data.carts[0].number,
                "color" : data.carts[0].color,
                "size" : data.carts[0].size,
                "price" : data.carts[0].price,
                "num" : 1
            }
        }
        $.cookie('cart',JSON.stringify(cookie_obj),{expires:7,path: '/'});
        console.log($.cookie());
    })
})

/* 页面滚动到一定距离，导航条显示 */
$(window).scroll(function(){
    if($(this).scrollTop() > 800){
        $('.nav-prompt').css({
            display : 'block',
            position : 'fixed',
            zIndex : 100,
            left : 0,
            top : 0,
        })
        $('.outer').css({
            position : 'fixed',
            top : '66px',
            zIndex : 99,
            left : 0,
            margin : '0 auto'
        })
    }else if($(this).scrollTop() <= 800){
        $('.nav-prompt').css({
            display : 'none'
        })
        $('.outer').css({
            position : 'static'
        })
    }
    /* 页面滚动到特定位置，改变蓝色下边框的位置 */
    let pro_char = $('#product-character').offset().top;
    let similary = $('#similary').offset().top;
    let cus_com = $('#customer-comment').offset().top;
    /* console.log(pro_char,similary,cus_com)
    console.log($(this).scrollTop()); */
    let $as = $('.nav-fix a');
    if($(this).scrollTop() >= pro_char && $(this).scrollTop() < similary - 250){
        $as.each((index,value)=>{
            $(value).css({
                fontWeight : 400,
                borderBottom : 'none'
            })
        })
        $('.a1').css({
            fontWeight : 700,
            borderBottom : '3px solid #0082c3'
        })
    }else if($(this).scrollTop() >= (similary - 250) && $(this).scrollTop() < cus_com - 250){
        $as.each((index,value)=>{
            $(value).css({
                fontWeight : 400,
                borderBottom : 'none'
            })
        })
        $('.a2').css({
            fontWeight : 700,
            borderBottom : '3px solid #0082c3'
        })
    }else if($(this).scrollTop() >= (cus_com - 250)){
        $as.each((index,value)=>{
            $(value).css({
                fontWeight : 400,
                borderBottom : 'none'
            })
        })
        $('.a3').css({
            fontWeight : 700,
            borderBottom : '3px solid #0082c3'
        })
    }
})
/* 删除导航栏历史 */
$('.out a').click(function(){
    $('.history').css('display','none');
})

