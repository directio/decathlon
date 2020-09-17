/* 点继续购物回到首页 */
$('.continue-shop').click(function(){
    location.href = '../index.html';
})
$('.empty').click(function(){
    location.href = '../index.html';
})
/* 判断cookie中是否含有cart */
if($.cookie('cart').length != 2){
    $('.cart-empty').css('display','none');
    /* 获取购物车信息 */
    let cookie_str = $.cookie('cart') ? $.cookie('cart') : '';
    let cookie_obj = $toObj(cookie_str);
    console.log(cookie_obj);
    for(let key in cookie_obj){
        let good_id = cookie_obj[key];
        console.log(good_id);
        let str = `
        <div class="product">产品</div>
        <div class="div">单价</div>
        <div class="div">数量</div>
        <div class="div">总价</div>
        <div class="detail" data-decathlon-id="${key}">
            <img src="${good_id.src}" alt="">
            <div class="info">
                <h3>KALENJI</h3>
                <p class="type">${good_id.type}</p>
                <h4>${good_id.number}</h4>
                <p>颜色：${good_id.color}</p>
                <p>-尺寸：${good_id.size}</p>
                <a href="#">修改 | 加入收藏夹</a>
            </div>
            <strong>${good_id.price}</strong>
            <div class="num">
                <input type="button" value="-" class="minus">
                <input type="text" class="txt" value="${good_id.num}">
                <input type="button" value="+" class="plus">
            </div>
            <strong>￥${good_id.num * good_id.price}</strong>
            <input type="button" value="×" class="del">
        </div>
    `;
        $('.container').html(str);
        $('.money').html(`￥${good_id.num * good_id.price}`);
        $('.big-money').html(`￥${good_id.num * good_id.price}`);
    }
    //减号
    let $minus = $('.minus');
    $minus.each(function(i,value){
        $(value).click(()=>{
            //获取id
            let id = $(this).parents('.detail').attr('data-decathlon-id');
            //获取cookie
            let cookie_str = $.cookie('cart') ? $.cookie('cart') : '';
            //转对象
            let cookie_obj = $toObj(cookie_str);
            /* console.log(cookie_obj); */
            //改变数量
            if(cookie_obj[id].num > 0){
                cookie_obj[id].num --;
            }
            //存入cookie
            $.cookie('cart',JSON.stringify(cookie_obj),{expires : 7,path : '/'});
            //修改数量文本框
            $(this).next().val(cookie_obj[id].num);
            //修改合计
            $(this).parent().next().text('￥' + cookie_obj[id].price * cookie_obj[id].num);
            $('.money').text('￥' + cookie_obj[id].price * cookie_obj[id].num);
            $('.big-money').text('￥' + cookie_obj[id].price * cookie_obj[id].num);
        })
    })
    //加号
    $('.plus').each(function(i,value){
        $(value).click(()=>{
            //当前商品的id
            let id = $(this).parents('.detail').attr('data-decathlon-id');
            //获取cookie
            let cookie_str = $.cookie('cart') ? $.cookie('cart') : '';
            //转对象
            let cookie_obj = $toObj(cookie_str);
            //数量增加
            cookie_obj[id].num ++;
            //存入cookie
            $.cookie('cart',JSON.stringify(cookie_obj),{expires : 7,path : '/'});
            //修改数量文本框
            $(this).prev().val(cookie_obj[id].num);
            //合计
            //修改合计
            $(this).parent().next().text('￥' + cookie_obj[id].price * cookie_obj[id].num.toFixed(2));
            $('.money').text('￥' + cookie_obj[id].price * cookie_obj[id].num);
            $('.big-money').text('￥' + cookie_obj[id].price * cookie_obj[id].num);
        })
    })
    //数量框
    $('.txt').each(function(index,value){
        $(value).blur(()=>{
            //id
            let id = $(this).parents('.detail').attr('data-decathlon-id');
            
            //获取cookie
            let cookie_str = $.cookie('cart') ? $.cookie('cart') : '';
            //转对象
            let cookie_obj = $toObj(cookie_str);
            //文本框数量
            //非数字   正整数
            let num = $(this).val();
            if(!/^\d+$/.test(num)){
                num = 0;
            }
            cookie_obj[id].num = num;
            
            //存入cookie
            $.cookie('cart',JSON.stringify(cookie_obj),{expires : 7,path : '/'});
            $(this).val(cookie_obj[id].num);
            $(this).parent().next().text(cookie_obj[id].price * cookie_obj[id].num);
            $('.money').text('￥' + cookie_obj[id].price * cookie_obj[id].num);
            $('.big-money').text('￥' + cookie_obj[id].price * cookie_obj[id].num);
        })
    })
    //删除
    $('.del').each(function(index,value){
        $(value).click(()=>{
            let id = $(this).parents('.detail').attr('data-decathlon-id');
            //获取cookie
            let cookie_str = $.cookie('cart') ? $.cookie('cart') : '';
            //转对象
            let cookie_obj = $toObj(cookie_str);
            //删除对象中的属性
            delete cookie_obj[id];
            //存入cookie
            $.cookie('cart',JSON.stringify(cookie_obj),{expires : 7,path : '/'});
            //删除页面中的商品信息
            $(this).parents('.detail').remove();
            console.log($.cookie('cart'));
            $('.money').text('￥0.00');
            $('.big-money').text('￥0.00');
            if($.cookie('cart') == undefined){
                $('.cart-empty').show();
                $('.container').hide();
            }
            location.reload();
        })
    })
}else if($.cookie('cart').length == 2){
    $('.cart-empty').show();
    $('.container').hide();
}

