
/* 点击商品进入详情页 */
let $product = $('.product');
$product.each((index,value)=>{
	$(value).click(function(){
		location.href = 'detail.html';
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
$('.tabbox .content li:eq(0)').show();
/* 左侧工具栏滚动 */
/* 滚动距离小于头部加导航栏高度，或者大于右侧商品栏高度，正常滚动 */
$(window).scroll(function(){
	if($(this).scrollTop() > $('.c').offset().top && $(this).scrollTop() < $('.open').offset().top - 620){
		$('article').css({
			position : 'fixed',
			top : 0
		})
		$('section').css('margin-left','23%');
	}else if($(this).scrollTop() <= $('.c').offset().top){
		$('article').css({
			position : 'static',
		})
		$('section').css('margin-left','0');
	}else if($(this).scrollTop() > $('.open').offset().top - 620){
		$('article').css({
			position : 'absolute',
			top : '1368px',
			left : '0'
		})
		$('section').css('margin-left','23%');
	}
})


$(function(){
	$(".tabbox .tab a").click(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var index = $(this).index();
		number = index;
		$('.tabbox .content li').hide();
		$('.tabbox .content li:eq('+index+')').show();
	});
	
	var auto = 1;  //等于1则自动切换，其他任意数字则不自动切换
	if(auto ==1){
		var number = 0;
		var maxNumber = $('.tabbox .tab a').length;
		function autotab(){
			number++;
			number == maxNumber? number = 0 : number;
			$('.tabbox .tab a:eq('+number+')').addClass('on').siblings().removeClass('on');
			$('.tabbox .content ul li:eq('+number+')').show().siblings().hide();
		}
	}
});
/* 删除导航栏历史 */
$('.out a').click(function(){
    $('.history').hide();
})