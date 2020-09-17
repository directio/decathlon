/* 回到顶部 */
$(window).scroll(function(){
    console.log($(this).scrollTop());
    console.log($(this).scrollTop() > $('body').outerHeight() * 0.8)
    if($(this).scrollTop() > $('body').outerHeight() * 0.7){
        $('.to-top').show();
    }else{
        $('.to-top').hide();
    }
})
$('.to-top').click(function(){
    $(this).hide();
    $('body').scrollTop(0);
    $(document).scrollTop(0);
})

 /* 首页轮播图 */
$('.swiper-item').width($(window).width());
 class Swiper {
    constructor() {
        this.w = $('.swiper-item').width();
        this.num = 0;
        this.len = $('.swiper .swiper-item').length - 1;
        this.timer = null;
    }
    init() {
        //设置定时器
        this.setTime();
        //滑上停止定时器
        this.hover();
        //点击指示
        this.pointClick();
        //点击左右箭头
        this.lrClick();
    }
    setTime() {
        this.timer = setInterval(() => {
            this.num++;	
            if (this.num > this.len) {
                this.num = 0;
            }
            let cssTrx = -this.num * this.w;
            $('.swiper-point-item .point').eq(this.num).addClass('active').siblings().removeClass('active');
            $('.swiper').css({transform: `translateX(${cssTrx}px)`})
        }, 3000)
    }
    hover() {
        $('.swiper-contione').hover(() => {
            clearInterval(this.timer)
        }, () => {
            this.setTime();
        });
    }
    pointClick() {
        let that = this;
        $('.swiper-point-item .point').click(function() {
            that.num = $(this).index();
            let cssTrx = -that.num * that.w;
            $(this).addClass('active').siblings().removeClass('active');
            $('.swiper').css({
                transform: `translateX(${cssTrx}px)`
            })
        })
    }
    lrClick() {
        $('.swiper-left img').click(() => {
            this.num--;
            if (this.num < 0) {
                this.num = this.len;
            };
            let cssTrx = -this.num * this.w;
            $('.swiper-point-item .point').eq(this.num).addClass('active').siblings().removeClass('active');
            $('.swiper').css({
                transform: `translateX(${cssTrx}px)`
            })
        });
        
        $('.swiper-right img').click(() => {
            this.num++;
            if (this.num > this.len) {
                this.num = 0;
            }
            let cssTrx = -this.num * this.w;
            $('.swiper-point-item .point').eq(this.num).addClass('active').siblings().removeClass('active');
            $('.swiper').css({
                transform: `translateX(${cssTrx}px)`
            })
        })
    }
}
let sw = new Swiper();
sw.init();

/* 运动 */
class Sport{
    constructor(){
        this.init();
    }
    init(){
        $.get('./index.json',(data)=>{
            console.log(data.sport);
            data.sport.forEach((value,index)=>{
                let str = `
                <div class="de-sport">
                    <img src="${data.sport[index].src}" alt="">
                    <p>${data.sport[index].title}</p>
                    <div class="mark">
                        <h2>${data.sport[index].title}</h2>
                        <ul class="list">
                            <li><a href="#">${data.sport[index].li1}</a></li>
                            <li><a href="#">${data.sport[index].li2}</a></li>
                            <li><a href="#">${data.sport[index].li3}</a></li>
                            <li><a href="#">${data.sport[index].li4}</a></li>
                        </ul>
                    </div>
                </div>
                `;
            $('#sport').append(str);
            })
        })
    } 
}
new Sport();
/* 点击更多运动加载更多 */
$('.more-sport').click(function(){
    $('#sport').css('height','auto');
    $(this).hide();
})





