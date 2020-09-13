
/* 设置左侧导航栏高度与屏幕相同 */ 
/* $('.cat_wrap').height($(window).height()); */
/* 获取tab里的数据 */
class Tab{
    constructor(){
        this.init();
    }
    init(){
        $.get('./index.json',(data)=>{
            let str = `
                <ul class="clearfix">
                    <li class="detail">
                        <img src="${data.tab[0].src}">
                        <br>
                        <a href="#">${data.tab[0].a}</a>
                    </li>
                    <li class="detail">
                        <img src="${data.tab[1].src}">
                        <br>
                        <a href="#">${data.tab[1].a}</a>
                    </li>
                    <li class="detail">
                        <img src="${data.tab[2].src}">
                        <br>
                        <a href="#">${data.tab[2].a}</a>
                    </li>
                    <li class="detail">
                        <img src="${data.tab[0].src}">
                        <br>
                        <a href="#">${data.tab[0].a}</a>
                    </li>
                    <li class="detail">
                        <img src="${data.tab[1].src}">
                        <br>
                        <a href="#">${data.tab[1].a}</a>
                    </li>
                    <li class="detail">
                        <img src="${data.tab[2].src}">
                        <br>
                        <a href="#">${data.tab[2].a}</a>
                    </li>
                    <li class="detail">
                        <img src="${data.tab[0].src}">
                        <br>
                        <a href="#">${data.tab[0].a}</a>
                    </li>
                    <li class="detail">
                        <img src="${data.tab[1].src}">
                        <br>
                        <a href="#">${data.tab[1].a}</a>
                    </li>
                    <li class="detail">
                        <img src="${data.tab[2].src}">
                        <br>
                        <a href="#">${data.tab[2].a}</a>
                    </li>
                    <li class="detail">
                        <img src="${data.tab[0].src}">
                        <br>
                        <a href="#">${data.tab[0].a}</a>
                    </li>
                    <li class="detail">
                        <img src="${data.tab[1].src}">
                        <br>
                        <a href="#">${data.tab[1].a}</a>
                    </li>
                    <li class="detail">
                        <img src="${data.tab[2].src}">
                        <br>
                        <a href="#">${data.tab[2].a}</a>
                    </li>
                    <li class="detail">
                        <img src="${data.tab[0].src}">
                        <br>
                        <a href="#">${data.tab[0].a}</a>
                    </li>
                    <li class="detail">
                        <img src="${data.tab[1].src}">
                        <br>
                        <a href="#">${data.tab[1].a}</a>
                    </li>
                    <li class="detail">
                        <img src="${data.tab[2].src}">
                        <br>
                        <a href="#">${data.tab[2].a}</a>
                    </li>
                    <li class="detail">
                        <img src="${data.tab[0].src}">
                        <br>
                        <a href="#">${data.tab[0].a}</a>
                    </li>
                    <li class="detail">
                        <img src="${data.tab[1].src}">
                        <br>
                        <a href="#">${data.tab[1].a}</a>
                    </li>
                    <li class="detail">
                        <img src="${data.tab[2].src}">
                        <br>
                        <a href="#">${data.tab[2].a}</a>
                    </li>
                </ul>
            `;
            let $cat_sublist = $('.cat_sublist');
            $cat_sublist.eq(0).html(str);
        })
    }
}

/* 点击分类出现左侧选项卡 */
let is_on = false;
$('.sort').click(function(){
    new Tab();
    is_on = !is_on;
    if(is_on){
        $('#tab').css('transform','translateX(0)');
    }else{
        $('#tab').css('transform','translateX(-605px)');
    }
})

/* banner左侧内容栏 */
$(function(){
    /*  鼠标点击左侧内容栏   滑动出弹层 */
     $('.float').each(function(index,value){
         $(value).mouseenter(function(){
             $(this).find('li').addClass("active");
             $(this).siblings().find('li').removeClass("active");
             var thisUB = $('.cat_wrap .cat_list .float').index($(this));
             if($.trim($('.cat_subcont .cat_sublist').eq(thisUB).html()) != ""){
                 $('.cat_subcont').addClass('active');
                 $('.cat_sublist').hide();
                 $('.cat_sublist').eq(thisUB).html();
                 $('.cat_sublist').eq(thisUB).show();
             }else{
                 $('.cat_subcont').removeClass('active');
             }
         })
     })
 })

 /* 首页上边轮播图 */
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
            console.log(this.num)
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
                let str = `
                <div class="de-sport">
                    <img src="${data.sport[0].src}" alt="">
                    <p>${data.sport[0].title}</p>
                    <div class="mark">
                        <h2>${data.sport[0].title}</h2>
                        <ul class="list">
                            <li>${data.sport[0].li1}</li>
                            <li>${data.sport[0].li2}</li>
                            <li>${data.sport[0].li3}</li>
                            <li>${data.sport[0].li4}</li>
                        </ul>
                    </div>
                </div>
                <div class="de-sport">
                    <img src="${data.sport[1].src}" alt="">
                    <p>${data.sport[1].title}</p>
                    <div class="mark">
                        <h2>${data.sport[1].title}</h2>
                        <ul class="list">
                            <li>${data.sport[1].li1}</li>
                            <li>${data.sport[1].li2}</li>
                            <li>${data.sport[1].li3}</li>
                        </ul>
                    </div>
                </div>
                    
                <div class="de-sport">
                    <img src="${data.sport[2].src}" alt="">
                    <p>${data.sport[2].title}</p>
                    <div class="mark">
                        <h2>${data.sport[2].title}</h2>
                        <ul class="list">
                            <li>${data.sport[2].li1}</li>
                            <li>${data.sport[2].li2}</li>
                            <li>${data.sport[2].li3}</li>
                            <li>${data.sport[2].li4}</li>
                            <li>${data.sport[2].li5}</li>
                        </ul>
                    </div>
                </div>
                <div class="de-sport">
                    <img src="${data.sport[3].src}" alt="">
                    <p>${data.sport[3].title}</p>
                    <div class="mark">
                        <h2>${data.sport[3].title}</h2>
                        <ul class="list">
                            <li>${data.sport[2].li1}</li>
                            <li>${data.sport[2].li2}</li>
                            <li>${data.sport[2].li3}</li>
                            <li>${data.sport[2].li4}</li>
                            <li>${data.sport[2].li5}</li>
                        </ul>
                    </div>
                </div>
                <div class="de-sport">
                    <img src="${data.sport[4].src}" alt="">
                    <p>${data.sport[4].title}</p>
                    <div class="mark">
                        <h2>${data.sport[4].title}</h2>
                        <ul class="list">
                            <li>${data.sport[4].li1}</li>
                            <li>${data.sport[4].li2}</li>
                            <li>${data.sport[4].li3}</li>
                        </ul>
                    </div>
                </div>
                <div class="de-sport">
                    <img src="${data.sport[5].src}" alt="">
                    <p>${data.sport[2].title}</p>
                    <div class="mark">
                        <h2>${data.sport[2].title}</h2>
                        <ul class="list">
                            <li>${data.sport[5].li1}</li>
                            <li>${data.sport[5].li2}</li>
                            <li>${data.sport[5].li3}</li>
                            <li>${data.sport[5].li4}</li>
                        </ul>
                    </div>
                </div>
                <div class="de-sport">
                    <img src="${data.sport[3].src}" alt="">
                    <p>${data.sport[3].title}</p>
                    <div class="mark">
                        <h2>${data.sport[3].title}</h2>
                        <ul class="list">
                            <li>${data.sport[5].li1}</li>
                            <li>${data.sport[5].li2}</li>
                            <li>${data.sport[5].li3}</li>
                            <li>${data.sport[5].li4}</li>
                            <li>${data.sport[5].li5}</li>
                        </ul>
                    </div>
                </div>
                <div class="de-sport">
                    <img src="${data.sport[0].src}" alt="">
                    <p>${data.sport[0].title}</p>
                    <div class="mark">
                        <h2>${data.sport[0].title}</h2>
                        <ul class="list">
                            <li>${data.sport[5].li1}</li>
                            <li>${data.sport[5].li2}</li>
                            <li>${data.sport[5].li3}</li>
                            <li>${data.sport[5].li4}</li>
                        </ul>
                    </div>
                </div>
                <div class="de-sport">
                    <img src="${data.sport[1].src}" alt="">
                    <p>${data.sport[1].title}</p>
                    <div class="mark">
                        <h2>${data.sport[1].title}</h2>
                        <ul class="list">
                            <li>${data.sport[5].li1}</li>
                            <li>${data.sport[5].li2}</li>
                            <li>${data.sport[5].li3}</li>
                            <li>${data.sport[5].li4}</li>
                            <li>${data.sport[5].li5}</li>
                        </ul>
                    </div>
                </div>
                <div class="de-sport">
                    <img src="${data.sport[2].src}" alt="">
                    <p>${data.sport[2].title}</p>
                    <div class="mark">
                        <h2>${data.sport[2].title}</h2>
                        <ul class="list">
                            <li>${data.sport[5].li1}</li>
                            <li>${data.sport[5].li2}</li>
                            <li>${data.sport[5].li3}</li>
                            <li>${data.sport[5].li4}</li>
                            <li>${data.sport[5].li5}</li>
                        </ul>
                    </div>
                </div>
                <div class="de-sport">
                    <img src="${data.sport[3].src}" alt="">
                    <p>${data.sport[3].title}</p>
                    <div class="mark">
                        <h2>${data.sport[3].title}</h2>
                        <ul class="list">
                            <li>${data.sport[5].li1}</li>
                            <li>${data.sport[5].li2}</li>
                            <li>${data.sport[5].li3}</li>
                            <li>${data.sport[5].li4}</li>
                            <li>${data.sport[5].li5}</li>
                        </ul>
                    </div>
                </div>
                <div class="de-sport">
                    <img src="${data.sport[4].src}" alt="">
                    <p>${data.sport[4].title}</p>
                    <div class="mark">
                        <h2>${data.sport[4].title}</h2>
                        <ul class="list">
                            <li>${data.sport[5].li1}</li>
                            <li>${data.sport[5].li2}</li>
                            <li>${data.sport[5].li3}</li>
                            <li>${data.sport[5].li4}</li>
                            <li>${data.sport[5].li5}</li>
                        </ul>
                    </div>
                </div>    
                `;
            $('#sport').html(str);
        })
    } 
}
new Sport();





