function bannerSwiper(){
  let mySwiper = new Swiper ('.container', {
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.container .swiper-pagination',
      bulletClass : 'my-bullet',
      bulletActiveClass: 'my-bullet-active',
      clickable: true
    },
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
}

function commoditySwiper(){
  let mySwiper = new Swiper('.commodity_content',{
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.commodity_content .swiper-pagination',
      bulletClass : 'my-bullet',
      bulletActiveClass: 'my-bullet-active',
      clickable: true
    },
  })
}

function waterfallWoW(){
  let wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: -100,
    mobile: true,
    live:  true
  })
  wow.init()
}

function topHeader(){
  $(window).scroll(function(){
    let scrollTop = $(document).scrollTop();
    let boxTop = $('.brand').offset().top
    if(scrollTop >= boxTop){
      $('.logo_content').css({
        'background-color':'#fefefe',
        'box-shadow': '1px 1px 10px'
      })
    }else{
      $('.logo_content').css({
        'background-color':'transparent',
        "box-shadow": 'none'
      })
    }
  })
}
