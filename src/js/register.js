
/* 验证手机号 */
$('#txt').blur(function(){
    let str = $(this).val();
    /* 手机号正则 */
    let phone_reg = /^(13|14|15|17|18|19)[0-9]{9}$/;
    if(!phone_reg.test(str)){
        $('.warning').css('display','block');
    }else{
        $('.warning').css('display','none');
    }
})
$('#btn').click(function(){
    
    let storage = window.localStorage;
    let storage_str = storage.getItem('register') ? storage.getItem('register') : '';
    let storage_obj = $toObj(storage_str);
    let str = $('#txt').val();
    let cookie_str = $.cookie('register') ? $.cookie('register') : '';
    let cookie_obj = $toObj(cookie_str);
    if(str in cookie_obj){
        $(this).hide();
        $('<p><input type="password" id="pwd" placeholder="密码"></p>').insertAfter($('#txt'));
        $('<a href="#" class="a">忘记密码</a>').insertAfter($('#pwd'));
        $('#btn').css('display','none');
        $('<input type="button" id="login" value="登录">').insertAfter($('.a'));
        $('<label><input type="checkbox"> &nbsp;记住我</label>').insertAfter($('#login'));
        $('#login').click(function(){
            //登录验证
            let uname = Number($('#txt').val());
            let upwd = $('#pwd').val();
            if(upwd == cookie_obj[uname]){
                alert('登录成功');
                location.href = '../index.html';
            }else{
                alert('密码输入错误');
            }
        })
    }else{
        storage_obj[str] = null;
        storage.setItem('register',JSON.stringify(storage_obj));
        location.href = 'register2.html';
    }
})
