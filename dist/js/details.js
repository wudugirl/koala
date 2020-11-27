"use strict";

window.addEventListener('load', function () {
  // 业务逻辑
  //     1.遮罩层盒子与放大镜盒子初始隐藏，光标移入show盒子时显示，移出show盒子隐藏
  //     2.当光标在show盒子移动的时候让遮罩层跟着走
  //     3.两对盒子成比例出现
  //     4.在show盒子的move事件里,让放大镜图片跟着动
  // 遮罩层移动距离      遮罩层的尺寸
  // -------------  =  ------------
  // 放大镜图片移动的距离    放大镜盒子尺寸  
  // 放大镜图片移动的距离 =遮罩层移动距离*放大镜盒子尺寸/遮罩层的尺寸
  //     5.切换图片
  function Enlarge(id) {
    //获取box大盒子
    this.ele = document.querySelector(id); //获取show盒子

    this.show = this.ele.querySelector('.show'); //获取mask盒子

    this.mask = this.ele.querySelector('.mask'); //获取enlarge盒子

    this.enlarge = this.ele.querySelector('.enlarge'); //获取放大镜图片

    this.img = this.ele.querySelector('.enlarge>img'); //获取list 盒子

    this.list = this.ele.querySelector('.list'); //获取list中两个p标签

    this.ps = this.list.querySelector('p'); //直接启动启动器

    this.init();
  } // 0. 准备一个启动器(入口函数)


  Enlarge.prototype.init = function () {
    this.overout();
    this.maskMove(); // this.setScale()
  }; // 1.移入移出显示和隐藏


  Enlarge.prototype.overout = function () {
    var _this2 = this;

    // 给show盒子绑定移入移出事件
    // this.show.addEventListener('mouseover',function(){这里的this.show})
    // this.show.addEventListener('mouseover',() => {这里的this是当前实例})
    this.show.addEventListener('mouseover', function () {
      //光标移入show盒子显示
      _this2.mask.style.display = 'block';
      _this2.enlarge.style.display = 'block';
    });
    this.show.addEventListener('mouseout', function () {
      //光标移出show盒子隐藏
      _this2.mask.style.display = 'none';
      _this2.enlarge.style.display = 'none';
    });
  }; // 2.遮罩层动起来


  Enlarge.prototype.maskMove = function () {
    var _this3 = this;

    //给show盒子绑定一个move事件
    this.show.addEventListener('mousemove', function (e) {
      e = e || window.event;
      var x = e.pageX - _this3.ele.offsetLeft - 100;
      var y = e.pageY - _this3.ele.offsetTop - 100; //获取遮罩层的高度与宽度

      var maskX = _this3.mask.offsetWidth;
      var maskY = _this3.mask.offsetHeight; //获取show盒子的高度与宽度

      var showX = _this3.show.offsetWidth;
      var showY = _this3.show.offsetHeight; //边界值判断

      if (x <= 0) {
        x = 0;
      }

      if (y <= 0) {
        y = 0;
      }

      if (x >= showX - maskX) {
        x = showX - maskX;
      }

      if (y >= showY - maskY) {
        y = showY - maskY;
      } //给遮罩层赋值


      _this3.mask.style.left = x + 'px';
      _this3.mask.style.top = y + 'px'; //4.让放大镜图片动起来
      // 获取enlarge盒子尺寸

      var enlargeX = _this3.enlarge.offsetWidth;
      var enlargeY = _this3.enlarge.offsetHeight; // 放大镜图片移动的距离 =遮罩层移动距离*放大镜盒子尺寸/遮罩层的尺寸

      var bgX = x * enlargeX / maskX;
      var bgY = y * enlargeY / maskY;
      _this3.img.style.left = "-".concat(bgX, "px");
      _this3.img.style.top = "-".concat(bgY, "px");
    });
  }; // // 3.设置放大镜盒子尺寸成比例 
  // Enlarge.prototype.setScale = function(){
  //     //获取遮罩层的尺寸(获取元素的非行内样式)
  //     // const maskX = parseInt(getComputedStyle(this.mask).width)
  //     // const maskY = parseInt(getComputedStyle(this.mask).height)
  //     const maskX = this.mask.offsetWidth
  //     const maskY = this.mask.offsetHeight
  //     //获取show盒子的尺寸
  //     const showX = this.show.offsetWidth
  //     const showY = this.show.offsetHeight
  //     //获取放大镜图片的尺寸 
  //     const imgX = parseInt(getComputedStyle(this.img).width)
  //     const imgY = parseInt(getComputedStyle(this.img).height)
  //     // console.log(imgX,imgY);
  //     //放大镜盒子 = 遮罩层盒子/show盒子*放大镜图片尺寸
  //     const x = maskX/showX*imgX
  //     const y = maskY/showY*imgY
  //     x&&(this.enlarge.style.width = x + 'px')
  //     y&&(this.enlarge.style.height = y + 'px')
  // }
  // 5. 给两个 p 标签设置点击事件


  Enlarge.prototype.bindEvent = function () {
    //提前保存this为当前实例
    var _this = this; //循环绑定事件


    for (var i = 0; i < this.ps.length; i++) {
      this.ps[i].addEventListener('click', function () {
        //这里的this是事件源
        _this.ps.forEach(function (item) {
          return item.className = '';
        });

        this.className = 'active';
      });
    }
  };

  var e = new Enlarge('#box');
  console.log(e);
});