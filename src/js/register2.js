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


/* 点击创建账户，创建cookie */
$('.create').click(function(){
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
})
