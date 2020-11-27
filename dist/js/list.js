"use strict";

var ul = document.querySelector('.goodslist>ul');
ul.addEventListener('click', function (e) {
  e = e || window.event;
  var target = e.target;
  console.log(33);

  if (target.className === 'li') {
    console.log(111);
    location.assign('../details.html');
  }
});