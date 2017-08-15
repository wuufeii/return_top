/**
 * Created by wufei on 2017/8/8.
 */
window.onload = function(){
    var obtn = document.getElementById('btn');
    var timer = null;
    var clientHeight =  document.documentElement.clientHeight;
    //滚动条滚动时触发
    window.onscroll = function(){
        var osTop = document.documentElement.scrollTop||document.body.scrollTop;
        if(osTop>=clientHeight){
            obtn.style.display = 'block'
        }else{
            obtn.style.display='none'
        }
    }
    obtn.onclick = function(){
        //设置定时器
        timer = setInterval(function(){
            var osTop = document.documentElement.scrollTop||document.body.scrollTop;
            //获取滚动条距离顶部的高度
            var ispeed = osTop/5;
            document.documentElement.scrollTop = document.body.scrollTop = osTop - ispeed;
            if(osTop == 0){
                clearInterval(timer);
            }
        },30);
    }
}
