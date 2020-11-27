// 首页焦点轮播图
var mySwiper = new Swiper('.swiper-container', {
  // direction: 'vertical', // 垂直切换选项
  loop: true, // 循环模式选项
  effect : 'fade',
  speed:600,
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    },
  // 如果需要分页器
  pagination: {
    el: '.swiper-pagination',
    clickable :true,
  },

  // 如果需要前进后退按钮
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // 如果需要滚动条
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
})

// 热门品牌轮播图      
  var mySwiper = new Swiper ('.swiper-left', {
    // direction: 'vertical' // 垂直切换选项
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.left-pagination',
      type:'progressbar',
      clickable: true
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.left-button-next',
      prevEl: '.left-button-prev',
    },
    
    // 如果需要滚动条
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  })    
  


