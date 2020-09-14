$('.tabbox .content li:eq(0)').show();

/* 左侧工具栏滚动 */
/* 滚动距离小于头部加导航栏高度，或者大于右侧商品栏高度，正常滚动 */
$(window).scroll(function(){
    if($(this).scrollTop() > $('header').outerHeight() + $('nav').outerHeight() && $(this).scrollTop() < $('section').outerHeight() - 230){
        $('article').css({
            position : 'fixed',
            top : 0,
        });
        $('article').css('margin-top','0px');
        $('section').css('margin-left','23%');
    }else if($(this).scrollTop() <= $('header').outerHeight() + $('nav').outerHeight()){
        $('article').css('position','static');
        $('article').css('margin-top','0px');
        $('section').css('margin-left','0px');
    }else if($(this).scrollTop() > $('section').outerHeight() - 230){
        $('article').css('position','static');
        $('article').css('margin-top',$('section').outerHeight() - 720);
        $('section').css('margin-left','0px');
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