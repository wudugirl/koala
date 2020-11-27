"use strict";

window.addEventListener('load', function () {
  // 切换登录方式（密码或扫码）
  var right1 = document.querySelector('.right1');
  var right2 = document.querySelector('.right2');
  var tip2 = document.querySelector('.tip2');
  var tip3 = document.querySelector('.tip3');
  tip2.addEventListener('click', function () {
    right1.style.display = 'none';
    right2.style.display = 'block';
  });
  tip3.addEventListener('click', function () {
    right1.style.display = 'block';
    right2.style.display = 'none';
  }); //登录功能
  //1.获取元素

  var txt = document.querySelector('.login-content>.phone');
  var pwd = document.querySelector('.login-content>.code>.pwd');
  var button = document.querySelector('.login-content>button'); //2.从ajax请求数据对比输入的数据，点击登录按钮跳转页面

  button.addEventListener('click', function () {
    ajax({
      method: 'POST',
      url: 'http://www.qigexiaoairen.cn:3001/index/login/',
      data: {
        num: txt.value,
        pwd: pwd.value
      }
    }).then(function (res) {
      console.log(res);
      console.log(txt.value, pwd.value);
      var res1 = JSON.parse(res);
      setCookie(res1);
    });

    function setCookie(data) {
      if (data.err == -1) {
        console.log(1111);
        history.go(0);
      } else {
        localStorage.setItem('username', txt.value);
        localStorage.setItem('pwd', pwd.value);
        location.assign('index.html');
      }
    } // localStorage.setItem('username',txt.value)
    // localStorage.setItem('pwd',pwd.value)
    // location.assign('index.html')

  }); // ajax

  function ajax(obj) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      xhr.open(obj.method, obj.url);

      if (obj.method.toLowerCase() === 'get') {
        obj.url += '?';

        for (var key in obj.data) {
          obj.url += "".concat(key, "=").concat(obj.data[key], "&");
        } // 避免浏览器缓存


        obj.url += "_=".concat(Date.now());
        obj.url = obj.url.slice(0, -1);
        xhr.send();
      }

      if (obj.method.toLowerCase() === 'post') {
        var str = '';

        for (var _key in obj.data) {
          str += "".concat(_key, "=").concat(obj.data[_key], "&");
        }

        str = str.slice(0, -1);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.send(str);
      }

      xhr.onreadystatechange = function () {
        // 判断状态值.0-4代表五种状态,4代表最终完成
        if (xhr.readyState === 4) {
          // 判断状态码
          if (xhr.status === 200) {
            resolve(xhr.responseText);
          }

          reject('请求失败');
        }
      };
    });
  }
});