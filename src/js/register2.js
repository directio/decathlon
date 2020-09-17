/* 滑过返回按钮事件 */
$('.back').mouseenter(function(){
    $('.mark').css({
        transform : 'rotate(-16deg)',
        transformOrigin : '-85px 50px',
        transition: 'transform .6s ease'
    });
})
/* 滑出返回按钮事件 */
$('.back').mouseleave(function(){
    $('.mark').css({
        position: 'absolute',
        left: '-85px',
        top: '50px',
        transform: 'rotate(50deg)'
    });
})

/* 要验证的手机号码 */
let storage = window.localStorage;
let storage_str = storage.getItem('register') ? storage.getItem('register') : '';
let storage_obj = $toObj(storage_str);
/* console.log(storage_obj); */
for(let key in storage_obj){
    $('#txt').val(key);
}

/* 密码正则 */
$('.pwd').blur(function(){
    let upwd = $(this).val();
    let upwd_reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(!upwd_reg.test(upwd)){
        $('.warning').css('display','block');
        $(this).css('border-color','#fe5800');
        $(this).prev().prev().css('color','#e20c18');
    }else{
        $('.warning').css('display','none');
        $(this).css('border-color','#d4d7d9');
        $(this).prev().prev().css('color',' #7d7e80');
    }
})
$('.val').blur(function(){
    /* 验证码验证 */
    if($('.val').val() == ''){
        $('.warning1').css('display','block');
    }else{
        $('.warning1').css('display','none');
    }
})
$('.sur-name').blur(function(){
    /* 姓验证 */
    if($(this).val() == ''){
        $('.warning2').css('display','block');
    }else{
        $('.warning2').css('display','none');
    }
})
$('.nm').blur(function(){
    /* 名验证 */
    if($(this).val() == ''){
        $('.warning3').css('display','block');
    }else{
        $('.warning3').css('display','none');
    }
})

/* 点击创建账户，创建cookie */
$('.create').click(function(){
    /* 验证码验证 */
    if($('.val').val() == ''){
        $('.warning1').css('display','block');
    }else{
        $('.warning1').css('display','none');
    }
    /* 姓验证 */
    if($('.sur-name').val() == ''){
        $('.warning2').css('display','block');
    }else{
        $('.warning2').css('display','none');
    }
    /* 名验证 */
    if($('.nm').val() == ''){
        $('.warning3').css('display','block');
    }else{
        $('.warning3').css('display','none');
    }
    /* 密码验证 */
    let upwd = $('.pwd').val();
    let upwd_reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(!upwd_reg.test(upwd)){
        $('.warning').css('display','block');
        $('.pwd').css('border-color','#fe5800');
        $('.pwd').prev().prev().css('color','#e20c18');
    }else{
        $('.warning').css('display','none');
        $('.pwd').css('border-color','#d4d7d9');
        $('.pwd').prev().prev().css('color',' #7d7e80');
    }

    if($('.val').val() && $('.sur-name').val() && $('.nm').val() && upwd_reg.test(upwd)){
        let uname = $('#txt').val();
        let upwd = $('.pwd').val();
        let cookie_str = $.cookie("register") ? $.cookie("register") : '';
        let cookie_obj = $toObj(cookie_str);
        cookie_obj[uname] = upwd;
        $.cookie("register",JSON.stringify(cookie_obj),{expires:7, path:'/'});
        console.log($.cookie());
        alert('恭喜创建成功');
        let storage = window.localStorage;
        let storage_str = storage.getItem('register') ? storage.getItem('register') : '';
        let storage_obj = $toObj(storage_str);
        storage_obj[uname] = upwd;
        storage.setItem('register',JSON.stringify(storage_obj)); 
        location.href = 'register.html';
    }
})
