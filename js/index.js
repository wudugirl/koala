window.onload = function () {

    // 固定侧栏
    let side = document.querySelector('.side')
    document.addEventListener('scroll',function(){
        console.log(window.pageYOffset);
        if(window.pageYOffset>=650){
            side.style.position = 'fixed'
            side.style.top = 78 +'px'
            // side.style.top = window.pageYOffset + 28 + 'px'
        } else {
            side.style.position = 'absolute'
            side.style.top = '728px'
        }

    })

    // 固定顶部通栏
    let topBox = document.querySelector('.topBox')
    window.onscroll=function(){
        var top=document.documentElement.scrollTop||document.body.scrollTop;
        
        if(top>=50){
            topBox.style.display='flex'
        }else{
            topBox.style.display='none'
        }
    }

    // goTop
    let goTop = document.querySelector('.goTop')
    goTop.onclick=function(){
        var timer=setInterval(function(){
            // console.log('正在向上')
            var top=document.documentElement.scrollTop||document.body.scrollTop;
            document.documentElement.scrollTop-=100
            if(top<=0){
                clearInterval(timer)
            }
        },20)
    }

    // 搜索框
      // 1.获取表单，添加change事件
    let txt = document.querySelector(".txt")
    let List = document.querySelector('.List')
    txt.addEventListener('input',function(){
        let text = txt.nodeValue
        if(!text){
            List.innerHTML = ''
        }else{
        // 2.在事件处理函数中使用jsonp请求数据
         // 3.根据请求的数据在li中展示
         jsonp({
            url: 'http://suggestion.baidu.com/su',
            data: {
              wd: text,
            },
            jsonp: 'cb',
            jsonpcb: 'baidu',
            success: function (a) {
              ul.innerHTML = ''
              var arr = a.s
              for (var i = 0; i < arr.length; i++) {
                var li = document.createElement('li')
                li.innerText = arr[i]
                List.appendChild(li)
              }
            },
          })     
        }
    })
    
    function jsonp(options) {
        // script返回的函数执行只能在全局作用域下,将函数内的执行函数挂在window
        window[options.jsonpcb] = options.success
        let data = ''
        for (let key in options.data) {
            data += `${key}=${options.data[key]}&`
        }
        data = data.slice(0, -1)
        let script = document.createElement('script')
        script.src = `${options.url}?${options.jsonp}=${options.jsonpcb}&${data}`
        document.body.insertAdjacentElement('beforeend', script)
        script.onload = function () {
            this.remove()
        }
    }
}
