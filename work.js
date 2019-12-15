var box = document.getElementById('box');
var oNavList = document.getElementById('nav').children;
var slider = document.getElementById('slider');
var left = document.getElementById('left');
var right = document.getElementById('right');
var p=document.getElementsByTagName('p')[0];
var index = 1;
var timer = setInterval(next, 3000);
var isMoving = false;
//轮播
window.onload = function(){
    console.log('action');
    setInterval(function(){
        var now = parseInt(getStyle(p,'left'));
        var speed = -1;
        p.style.left = now + speed + 'px';
        if (now+speed <= -400) {
            p.style.left = 980 + 'px';
        }
    },20)}
//鼠标划入
box.onmouseover = function () {
    animate(left, { opacity: 50 });
    animate(right, { opacity: 50 });
    clearInterval(timer);
}
//鼠标划出
box.onmouseout = function () {
    animate(left, { opacity: 0 });
    animate(right, { opacity: 0 });
    timer = setInterval(next, 3000);
}
right.onclick = next;
left.onclick = prev;
for (var i = 0; i < oNavList.length; i++) {
    oNavList[i].idx = i;
    oNavList[i].onclick = function () {
        index = this.idx + 1;
        navmove();
        animate(slider, { left: -1200 * index });
    }
}
function next() {
    if (isMoving) {
        return;
    }
    isMoving = true;
    index++;
    navmove();
    animate(slider, { left: -1200 * index }, function () {
        if (index >= 6) {
            slider.style.left = -1200+'px';
            index = 1;
        }
        isMoving = false;
    });
}
function prev() {
    if (isMoving) {
        return;
    }
    isMoving = true;
    index--;
    navmove();
    animate(slider, { left: -1200 * index }, function () {
        if (index <= 0) {
            slider.style.left = '-6000px';
            index = 5;
        }
        isMoving = false;
    });
}
function navmove() {
    for (var i = 0; i < oNavList.length; i++) {
        oNavList[i].className = "";
    }
    if (index > 5) {
        oNavList[0].className = "active";
    } else if (index <= 0) {
        oNavList[4].className = "active";
    } else {
        oNavList[index - 1].className = "active";
    }
}



