"use strict";

// 头部
var head = " <nav class=\"contain\">\n<div class=\"nav-l\">\n  <span>\u8003\u62C9\u6B22\u8FCE\u4F60\uFF01</span>\n  <a href=\"http://localhost:3000/regsiter.html\">\u767B\u5F55</a>\n  <a href=\"javascript:;\">\u514D\u8D39\u6CE8\u518C</a>\n  <a href=\"javascript:;\"\n    >\u624B\u673A\u8003\u62C9\n    <div>\n      <img src=\"./img/\u624B\u673A\u8003\u62C9.png\" alt=\"\" />\n      <p>\u65B0\u4EBA\u4E0B\u8F7DAPP</p>\n      <p>\u988610\u5143\u6EE1\u51CF\u7EA2\u5305</p>\n    </div>\n  </a>\n</div>\n<div class=\"nav-r\">\n  <b>\u6BCF\u65E5\u7B7E\u5230</b>\n  <b>\u6211\u7684\u8BA2\u5355</b>\n  <a href=\"javascript:;\"\n    >\u4E2A\u4EBA\u4E2D\u5FC3\n    <ul>\n      <li>\u6211\u7684\u4F18\u60E0\u5238</li>\n      <li>\u6211\u7684\u8D2D\u7269\u6D25\u8D34</li>\n      <li>\u6211\u7684\u7EA2\u5305</li>\n      <li>\u6211\u7684\u8003\u62C9\u8C46</li>\n      <em></em>\n      <li>\u8D26\u6237\u7BA1\u7406</li>\n      <li>\u6211\u7684\u5B9E\u540D\u8BA4\u8BC1</li>\n      <li>\u6211\u7684\u53D1\u7968\u62AC\u5934</li>\n      <em></em>\n      <li>\u6211\u6536\u85CF\u7684\u5546\u54C1</li>\n      <li>\u6211\u5173\u6CE8\u7684\u54C1\u724C</li>\n      <em></em>\n      <li>\u552E\u540E\u7BA1\u7406</li>\n    </ul>\n  </a>\n  <a href=\"javascript:;\"\n    >\u5BA2\u6237\u670D\u52A1<span></span>\n    <ul>\n      <li>\u8054\u7CFB\u5BA2\u670D</li>\n      <li>\u5E2E\u52A9\u4E2D\u5FC3</li>\n      <li>\u77E5\u8BC6\u4EA7\u6743\u4FDD\u62A4</li>\n      <li>\u89C4\u5219\u4E2D\u5FC3</li>\n    </ul>\n  </a>\n  <a href=\"javascript:;\"\n    >\u5145\u503C\u4E2D\u5FC3<span></span>\n    <ul>\n      <li>\u8BDD\u8D39\u5145\u503C</li>\n      <li>\u6E38\u620F\u5145\u503C</li>\n      <li>AppStore\u5145\u503C\u5361</li>\n    </ul>\n  </a>\n  <a href=\"javascript:;\"\n    >\u6D88\u8D39\u8005\u6743\u76CA<span></span>\n    <ul>\n      <li>\u6D88\u8D39\u8005\u544A\u77E5\u4E66</li>\n    </ul>\n  </a>\n  <a href=\"javascript:;\" class=\"more\"\n    >\u66F4\u591A<span></span>\n    <ul>\n      <li>\u6536\u85CF\u672C\u7AD9</li>\n      <em></em>\n      <li>\n        \u65B0\u6D6A\u5FAE\u535A\n        <div>\n          <img src=\"./img/\u65B0\u6D6A\u5FAE\u535A.png\" alt=\"\" />\n        </div>\n      </li>\n      <li>\n        \u5FAE\u4FE1\u516C\u4F17\u53F7\n        <div>\n          <img src=\"./img/\u5FAE\u4FE1\u516C\u4F17\u53F7.png\" alt=\"\" />\n        </div>\n      </li>\n      <li>\u62DB\u5546\u5408\u4F5C</li>\n    </ul>\n  </a>\n  <b>\u89C6\u9891\u5185\u5BB9</b>\n</div>\n</nav>"; // 底部 版权

var copyright = "\n            <p>\n              <span>\u589E\u503C\u7535\u4FE1\u4E1A\u52A1\u7ECF\u8425\u8BB8\u53EF\u8BC1:\u6D59B2-20160288</span><span>(\u6D59)\u7F51\u68B0\u5E73\u53F0\u5907\u5B57[2018]\u7B2C00007\u53F7</span\n              ><span>\u963F\u91CC\u5DF4\u5DF4\u7248\u6743\u6240\u6709@2003-2020</span><span>\u9690\u79C1\u653F\u7B56-\u8003\u62C9\u6D77\u8D2D</span>\n            </p>\n            <p>\n              <span>\u7F51\u7EDC\u6587\u5316\u7ECF\u8425\u8BB8\u53EF\u8BC1:\u6D59\u7F51\u6587(2020)4340-180\u53F7</span\n              ><span>\u6D59\u6C5F\u7701\u7F51\u7EDC\u98DF\u54C1\u9500\u552E\u7B2C\u4E09\u65B9\u5E73\u53F0\u63D0\u4F9B\u8005\u5907\u6848:\u6D59\u7F51\u98DFA33010006</span>\n            </p>\n            <a\n              ><img src=\"./img/copyright1 (2).png\" alt=\"\" /><span> \u6D59\u516C\u7F51\u5B89\u590733010802002216\u53F7</span\n              ><span>\u4E92\u8054\u7F51\u836F\u54C1\u4FE1\u606F\u670D\u52A1\u8D44\u683C\u8BC1\u4E66\u7F16\u53F7(\u6D59)-2017-0027</span><span>\u6D59ICP\u590716011229\u53F7</span\n              ><span>\u81EA\u8425\u7ECF\u8425\u8005\u4FE1\u606F</span></a\n            >\n            <a\n              ><img class=\"img01\" src=\"./img/copyright1 (1).png\" alt=\"\" /><img\n                class=\"img02\"\n                src=\"./img/copyright1(3).png\"\n                alt=\"\"\n            /></a>"; // 底部

var footer = " <!-- \u670D\u52A1 -->\n<div class=\"service contain clearfix\">\n  <ul>\n    <span>\u6B63</span>\n    <li>\n      <h3>\u6B63\u54C1\u627F\u8BFA</h3>\n      <p>\u6B63\u54C1\u4FDD\u969C \u5047\u4E00\u8D54\u5341</p>\n    </li>\n  </ul>\n  <ul>\n    <span>\u6B63</span>\n    <li>\n      <h3>\u6B63\u54C1\u627F\u8BFA</h3>\n      <p>\u6B63\u54C1\u4FDD\u969C \u5047\u4E00\u8D54\u5341</p>\n    </li>\n  </ul>\n  <ul>\n    <span>\u6B63</span>\n    <li>\n      <h3>\u6B63\u54C1\u627F\u8BFA</h3>\n      <p>\u6B63\u54C1\u4FDD\u969C \u5047\u4E00\u8D54\u5341</p>\n    </li>\n  </ul>\n  <ul>\n    <span>\u6B63</span>\n    <li>\n      <h3>\u6B63\u54C1\u627F\u8BFA</h3>\n      <p>\u6B63\u54C1\u4FDD\u969C \u5047\u4E00\u8D54\u5341</p>\n    </li>\n  </ul>\n</div>\n\n<!-- \u5173\u4E8E\u6211\u4EEC -->\n<div class=\"abouts contain\">\n  <div class=\"about\">\n    <img class=\"img_about\" src=\"./img/logo.png\" alt=\"\" />\n    <span>\u5173\u6CE8\u6211\u4EEC</span>\n    <img src=\"./img/WB.png\" alt=\"\" />\n    <img src=\"./img/WX.png\" alt=\"\" />\n  </div>\n\n  <div class=\"msg\">\n    <ul>\n      <h2>\u8003\u62C9\u4FDD\u969C</h2>\n      <li>\u5047\u4E00\u8D54\u5341</li>\n      <li>\u5EC9\u6B63\u4E3E\u62A5</li>\n    </ul>\n    <ul>\n      <h2>\u65B0\u624B\u6307\u5357</h2>\n      <li>\u8D2D\u7269\u6D41\u7A0B</li>\n      <li>\u652F\u4ED8\u65B9\u5F0F</li>\n      <li>\u652F\u4ED8\u65B9\u5F0F</li>\n    </ul>\n    <ul>\n      <h2>\u65B0\u624B\u6307\u5357</h2>\n      <li>\u8D2D\u7269\u6D41\u7A0B</li>\n      <li>\u652F\u4ED8\u65B9\u5F0F</li>\n      <li>\u652F\u4ED8\u65B9\u5F0F</li>\n    </ul>\n    <ul>\n      <h2>\u65B0\u624B\u6307\u5357</h2>\n      <li>\u8D2D\u7269\u6D41\u7A0B</li>\n      <li>\u652F\u4ED8\u65B9\u5F0F</li>\n      <li>\u652F\u4ED8\u65B9\u5F0F</li>\n    </ul>\n    <ul>\n      <h2>\u8003\u62C9\u4FDD\u969C</h2>\n      <li>\u5047\u4E00\u8D54\u5341</li>\n      <li>\u5EC9\u6B63\u4E3E\u62A5</li>\n      <li>\u652F\u4ED8\u65B9\u5F0F</li>\n    </ul>\n    <ul>\n      <h2>\u8003\u62C9\u4FDD\u969C</h2>\n      <li>\u5047\u4E00\u8D54\u5341</li>\n      <li>\u5EC9\u6B63\u4E3E\u62A5</li>\n      <li>\u652F\u4ED8\u65B9\u5F0F</li>\n    </ul>\n  </div>\n\n  <div class=\"download\">\n    <img src=\"./img/\u624B\u673A\u8003\u62C9.png\" alt=\"\" />\n    <p>\u626B\u63CF\u4E0B\u8F7D\u624B\u673A\u7248</p>\n  </div>\n</div>\n\n<!-- \u7248\u6743 -->\n<div class=\"copyright\">\n  <p>\n    <span>\u589E\u503C\u7535\u4FE1\u4E1A\u52A1\u7ECF\u8425\u8BB8\u53EF\u8BC1:\u6D59B2-20160288</span><span>(\u6D59)\u7F51\u68B0\u5E73\u53F0\u5907\u5B57[2018]\u7B2C00007\u53F7</span\n    ><span>\u963F\u91CC\u5DF4\u5DF4\u7248\u6743\u6240\u6709@2003-2020</span><span>\u9690\u79C1\u653F\u7B56-\u8003\u62C9\u6D77\u8D2D</span>\n  </p>\n  <p>\n    <span>\u7F51\u7EDC\u6587\u5316\u7ECF\u8425\u8BB8\u53EF\u8BC1:\u6D59\u7F51\u6587(2020)4340-180\u53F7</span\n    ><span>\u6D59\u6C5F\u7701\u7F51\u7EDC\u98DF\u54C1\u9500\u552E\u7B2C\u4E09\u65B9\u5E73\u53F0\u63D0\u4F9B\u8005\u5907\u6848:\u6D59\u7F51\u98DFA33010006</span>\n  </p>\n  <a\n    ><img src=\"./img/copyright1 (2).png\" alt=\"\" /><span> \u6D59\u516C\u7F51\u5B89\u590733010802002216\u53F7</span\n    ><span>\u4E92\u8054\u7F51\u836F\u54C1\u4FE1\u606F\u670D\u52A1\u8D44\u683C\u8BC1\u4E66\u7F16\u53F7(\u6D59)-2017-0027</span><span>\u6D59ICP\u590716011229\u53F7</span\n    ><span>\u81EA\u8425\u7ECF\u8425\u8005\u4FE1\u606F</span></a\n  >\n  <a\n    ><img class=\"img01\" src=\"./img/copyright1 (1).png\" alt=\"\" /><img\n      class=\"img02\"\n      src=\"./img/copyright1(3).png\"\n      alt=\"\"\n  /></a>\n</div>";
var side = "<!-- \u5DE6\u4FA7 -->\n<div class=\"left\">\n  <a href=\"javascript:;\">\n    <h2>\u6EE188\u5143\u5305\u90AE</h2>\n    <p>\u90E8\u5206\u5546\u54C1\u9664\u5916</p>\n  </a>\n  <a href=\"javascript:;\">\n    <h3>\u70ED\u95E8\u54C1\u724C</h3>\n  </a>\n  <ul>\n    <li>\u8FD0\u52A8\u6237\u5916</li>\n    <li>\u7F8E\u5986\u4E13\u533A</li>\n    <li>\u4E2A\u4EBA\u5BB6\u6E05</li>\n    <li>\u8F7B\u5962\u9986</li>\n    <li>\u624B\u8868\u914D\u9970</li>\n    <li>\u7F8E\u98DF\u751F\u9C9C</li>\n    <li>\u670D\u9970\u978B\u9774</li>\n    <li>\u5BB6\u5C45\u751F\u6D3B</li>\n    <li>\u6570\u7801\u5BB6\u7535</li>\n    <li>\u6BCD\u5A74\u4E13\u533A</li>\n    <li>\u8425\u517B\u4FDD\u5065</li>\n  </ul>\n  <div class=\"download\">\n    <img src=\"./img/\u624B\u673A\u8003\u62C9.png\" alt=\"\" />\n    <b>\u65B0\u4EBA\u4E0B\u8F7DAPP</b>\n  </div>\n</div>\n<!-- \u53F3\u4FA7 -->\n<div class=\"right\">\n  <ul>\n    <li>\n      <div class=\"img\">\n        <img class=\"imgwrite\" src=\"./img/image (1).png\" alt=\"\" />\n        <img class=\"imgred\" src=\"./img/02.png\" alt=\"\" />\n      </div>\n      <p>\u7B7E\u5230</p>\n    </li>\n    <li>\n      <div class=\"img\">\n        <img class=\"imgwrite\" src=\"./img/image (1).png\" alt=\"\" />\n        <img class=\"imgred\" src=\"./img/02.png\" alt=\"\" />\n      </div>\n      <p>\u7B7E\u5230</p>\n    </li>\n    <li>\n      <div class=\"img\">\n        <img class=\"imgwrite\" src=\"./img/image (1).png\" alt=\"\" />\n        <img class=\"imgred\" src=\"./img/02.png\" alt=\"\" />\n      </div>\n      <p>\u7B7E\u5230</p>\n    </li>\n    <li class=\"goTop\">\n      <div class=\"img\">\n        <img class=\"imgwrite\" src=\"./img/image (1).png\" alt=\"\" />\n        <img class=\"imgred\" src=\"./img/02.png\" alt=\"\" />\n      </div>\n      <p>TOP</p>\n    </li>\n  </ul>\n</div>";

function dropEle() {
  document.querySelector('#head') && (document.querySelector('#head').innerHTML = head);
  document.querySelector('.copyright') && (document.querySelector('.copyright').innerHTML = copyright);
  document.querySelector('footer') && (document.querySelector('footer').innerHTML = footer);
  document.querySelector('#side') && (document.querySelector('#side').innerHTML = side);
}

try {
  dropEle();
} catch (error) {}