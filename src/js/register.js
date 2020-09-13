/* $('#btn').click(function(){
    let str = $('#txt').val();
    let cookie_str = $.cookie('register') ? $.cookie('register') : '';
    let cookie_obj = $toObj(cookie_str);
    if(str in cookie_obj){
        $('<p><input type="text" id="pwd"></p>').insertAfter($('#txt'));
    }else{
        cookie_obj[str] = null;
        $.cookie('register',JSON.stringify(cookie_obj),{expires:7, path:'/'});
    }
})  */
$('#btn').click(function(){
    let storage = window.localStorage;
    let storage_str = storage.getItem('register') ? storage.getItem('register') : '';
    let storage_obj = $toObj(storage_str);
    let str = $('#txt').val();
    let cookie_str = $.cookie('register') ? $.cookie('register') : '';
    let cookie_obj = $toObj(cookie_str);
    if(str in cookie_obj){
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
