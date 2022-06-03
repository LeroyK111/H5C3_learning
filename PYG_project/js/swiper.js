// @ts-nocheck

// 手写轮播图代码

window.addEventListener("load", function (e) {
  // 获取元素
  var arrow_l = document.querySelector(".arrow-l");
  var arrow_r = document.querySelector(".arrow-r");
  var focus = document.querySelector(".focus");
  //   每张图片的宽度
  var img_width = focus.offsetWidth;

  // 鼠标经过显示隐藏左右按钮
  focus.addEventListener("mouseenter", function () {
    arrow_l.style.display = "block";
    arrow_r.style.display = "block";
    //当我鼠标放上去后则，停止自动点击
    clearInterval(timer);
    timer = null;
  });
  focus.addEventListener("mouseleave", function () {
    arrow_l.style.display = "none";
    arrow_r.style.display = "none";
    // 鼠标离开则开启定时器
    timer = setInterval(() => {
      arrow_r.click();
    }, 2000);
  });

  // 按照图片个数自动生成li
  var focus_index = document.querySelector("#focus_index");
  var focus_imgs_ul = document.querySelector("#focus_imgs");
  var focus_imgs_li = focus_imgs_ul.querySelectorAll("li");
  var focus_index_li = focus_index.children;

  for (let index = 0; index < focus_imgs_li.length; index++) {
    let li = document.createElement("li");
    // 赋予自定义属性
    li.setAttribute("data-index", index);
    // 加入节点
    focus_index.appendChild(li);
    // 生成小圆圈的同时设置小圆圈的事件
    li.addEventListener("click", function () {
      //  每次点击都要让num跟随赋值
      num = circle = index;
      exclu();
      // 让图片跟随移动
      animate(focus_imgs_ul, -img_width * li.dataset.index, null);
    });
  }
  // 把第一个小li设置变色
  focus_index_li[0].style.backgroundColor = "orange";

  // 点击图片clone一份
  var first = focus_imgs_li[0].cloneNode(true);
  focus_imgs_ul.appendChild(first);
  // 防止点击按钮过快，我们放置一个节流阀
  var flag = true;
  // 让小圆圈跟随箭头一起播放
  var circle = 0;
  //   右侧按钮点击滚动事件
  var num = 0;

  arrow_r.addEventListener("click", function () {
    if (flag) {
      flag = false;

      if (num == focus_imgs_li.length) {
        focus_imgs_ul.style.left = 0;
        num = 0;
      }
      num++;
      animate(focus_imgs_ul, -num * img_width, flag_open);
      // 让小圆圈跟队变化
      circle++;
      if (circle == focus_imgs_li.length) {
        circle = 0;
      }
      exclu();
    }
  });

  //   左侧按钮
  arrow_l.addEventListener("click", function () {
    if (flag) {
      flag = false;

      if (num == 0) {
        num = focus_imgs_li.length;
        focus_imgs_ul.style.left = -num * img_width + "px";
      }
      num--;
      // 利用回调函数，对功能施加强制过程控制
      animate(focus_imgs_ul, -num * img_width, flag_open);
      // 让小圆圈跟队变化
      circle--;
      if (circle < 0) {
        circle = focus_imgs_li.length - 1;
      }
      exclu();
    }
  });


  // 节流阀函数
  function flag_open() {
    flag = true;
  }
  


  function exclu() {
    // 设置一个排他函数
    for (let x of focus_index_li) {
      x.style.backgroundColor = "#fff";
    }
    focus_index_li[circle].style.backgroundColor = "orange";
  }

  // 自动播放按钮
  var timer = setInterval(() => {
    //  手动调用点击事件
    arrow_r.click();
  }, 2000);
});
