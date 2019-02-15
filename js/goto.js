//跳转	
$(".goto").bind().click(function() {
	var index = $(this).attr('index')
	goto(index)
})

function goto(index) {
	window.location.href = index;
}
//返回上一级			
$("#back").bind().click(function() {
	window.history.go(-1);

})
//hide and block
var block = $(".block");
var hide = $(".qd-info");
var flag = 0;
block.bind().click(function() {
	if(flag == 0) {
		$(this).next().css({
			'display': 'none'
		})
	}
	if(flag == 1) {
		$(this).next().css({
			'display': 'block'
		})
		flag = 0;
		return;
	}
	flag++;
})



//侧滑
window.addEventListener('load', function() {
				var initX; //触摸位置
				var moveX; //滑动时的位置
				var X = 0; //移动距离
				var objX = 0; //目标对象位置
				window.addEventListener('touchstart', function(event) {
					
					var obj = event.target.parentNode;
					if(obj.className == "list-li") {
						initX = event.targetTouches[0].pageX;
						objX = (obj.style.WebkitTransform.replace(/translateX\(/g, "").replace(/rem\)/g, "")) * 1;
					}
					if(objX == 0) {
						window.addEventListener('touchmove', function(event) {
						
							var obj = event.target.parentNode;
							if(obj.className == "list-li") {
								moveX = event.targetTouches[0].pageX;
								X = moveX - initX;
								if(X >= 0) {
									obj.style.WebkitTransform = "translateX(" + 0 + "rem)";
								} else if(X < 0) {
									var l = Math.abs(X);
									obj.style.WebkitTransform = "translateX(" + -l + "rem)";
									if(l > 1.20) {
										l = 1.20;
										obj.style.WebkitTransform = "translateX(" + -l + "rem)";
									}
								}
							}
						});
					} else if(objX < 0) {
						window.addEventListener('touchmove', function(event) {
							
							var obj = event.target.parentNode;
							if(obj.className == "list-li") {
								moveX = event.targetTouches[0].pageX;
								X = moveX - initX;
								if(X >= 0) {
									var r = -1.20 + Math.abs(X);
									obj.style.WebkitTransform = "translateX(" + r + "rem)";
									if(r > 0) {
										r = 0;
										obj.style.WebkitTransform = "translateX(" + r + "rem)";
									}
								} else { //向左滑动
									obj.style.WebkitTransform = "translateX(" + -1.20 + "rem)";
								}
							}
						});
					}

				})
			
			})