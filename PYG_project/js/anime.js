function animate(obj, target, callback=null) {
    // 每次清除之前的定时器
    clearInterval(obj.timer);
    obj.timer = setInterval(() => {
        // 重新计算步长值
        let objLeft = obj.offsetLeft;
        // js中应当避免小数
        let step = (target - objLeft) / 10;

        // 判断正负
        step = step > 0 ? Math.ceil(step) : Math.floor(step);

        if (objLeft === target) {
            // 不用等于号，则无法回退
            // 停止定时器
            clearInterval(obj.timer);
            // 把回调函数写道定时器结束里面
            if (callback) {
                // 调用回调函数
                callback();
            }
            // 利用短路写法，更简单
            // callback && callback();
        };
        obj.style.left = objLeft + step + 'px';
    }, 15);
}