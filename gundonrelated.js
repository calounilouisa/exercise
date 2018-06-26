var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
		var topRight = document.getElementById('topRight');
		var topLeft = document.getElementById('topLeft');
		var headerSearch = document.getElementById('headerSearch');
		var blockMLRS = document.getElementById("blockMLRS");
		var sidebarLeft = document.getElementById("sidebarLeft");
		var mainBlock = document.getElementById("mainBlock");
		var mans = mainBlock.childNodes;
		var navs = sidebarLeft.childNodes;
		window.onscroll = function (){
			// 实现顶部搜索条的显示与隐藏
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			if (scrollTop < 50) {
				headerSearch.style.display = "none";
				sidebarLeft.style.display = "none";
			}else if (scrollTop > 200) {
				headerSearch.style.display = "block";
				sidebarLeft.style.display = "block";
			}
			// 实现左边浮动bar根据主页面的滚动实时调整
			for (var i =3; i< 8; i= i+2) {
				var j = i-2;
				var aimNav = mans[i];
				var mlirsH = mlrs.offsetTop;
				var aimH = aimNav.offsetTop;
				var viewH =aimH - scrollTop;
				var navsClass = navs[j].classList;
				if (viewH < 400 && viewH > -50) {
					if (!navsClass.contains("active")) {
						navsClass.add("active");
					};
				}else{
					navsClass.remove("active");
				};
			};
			 
		}
		
		sidebarLeft.onclick = function(event){
			target = event.target;
			for (var i = 3; i < 8; i= i + 2) {
				if(mans[i].innerHTML == target.innerHTML)
				var offsetTop = mans[i].offsetTop;
			}
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			document.documentElement.scrollTop = document.body.scrollTop = offsetTop - 100;
		}
		
		function addEventListener(target, type, fn){
			target.addEventListener(type,fn);
		}
		// 实现返回顶部
		function goTop(){
			timer = setInterval(function () {
				var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
				var stepTop = Math.ceil(scrollTop / 5);
				document.documentElement.scrollTop = document.body.scrollTop = scrollTop - stepTop;
				if (scrollTop == 0) {
					clearInterval(timer);
				};
			}, 30)
		}
		addEventListener(topRight, "click", goTop);
		addEventListener(topLeft,"click", goTop);