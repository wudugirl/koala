


ajax({
    method:'get',
    url:'http://www.qigexiaoairen.cn:3001/public/index.json',
}).then(res => {
    json(res)

})


function json(res){
    let menuName = document.querySelector('.menuName')
    let ctgcard = document.querySelector('.ctgcard')
    let menu = document.querySelector('.topnav>.menu')
    var obj=JSON.parse(res);
    console.log(obj);
    var arr = obj.tab
    var str = ''
    for (const {img, type, value} of arr) {
        str +=`
        <li>
            <img class="imgwrite" src=${img} alt="" />
            <img class="imgred" src="./img/01.png" alt="" />
            <b class="menuName">${type}</b>
            <span>></span>
        </li>
        `    
    }
    menu.innerHTML = str
    let lis = document.querySelectorAll('.menu>li')
    for(let i=0;i<lis.length;i++){
        lis[i].addEventListener('mouseover',function(){
            ctgcard.style.display = 'block'
            console.log(lis[i].children[2].innerHTML);
        })
        lis[i].addEventListener('mouseleave',function(){
            ctgcard.style.display = 'none'
        })
    }
    ctgcard.addEventListener('mouseover',function(){
        ctgcard.style.display = 'block'
    })
    ctgcard.addEventListener('mouseleave',function(){
        ctgcard.style.display = 'none'
    })
  

}

















// ajax
function ajax(obj) {
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest()
      xhr.open(obj.method, obj.url)
      if (obj.method.toLowerCase() === 'get') {
        obj.url += '?'
        for (let key in obj.data) {
          obj.url += `${key}=${obj.data[key]}&`
        }
        // 避免浏览器缓存
        obj.url += `_=${Date.now()}`
        obj.url = obj.url.slice(0, -1)
        xhr.send()
      }
      if (obj.method.toLowerCase() === 'post') {
        let str = ''
        for (let key in obj.data) {
          str += `${key}=${obj.data[key]}&`
        }
        str = str.slice(0, -1)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xhr.send(str)
      }
      xhr.onreadystatechange = function () {
        // 判断状态值.0-4代表五种状态,4代表最终完成
        if (xhr.readyState === 4) {
          // 判断状态码
          if (xhr.status === 200) {
            resolve(xhr.responseText)
          }
          reject('请求失败')
        }
      }
    })
  }