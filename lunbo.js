var picContainer = document.getElementById("picContainer");
		var lunboBox = document.getElementById("lunboBox");
		var buttons = document.getElementsByTagName('li');
		var prev = document.getElementById("prev");
		var next = document.getElementById("next");
		var container = document.getElementById("container");
		function animate(offset){
			var newLeft = parseInt(picContainer.style.left) + parseInt(offset);
			newLeft = newLeft + "px";
			picContainer.style.left = newLeft;
			var nowLeft = parseInt(picContainer.style.left);
			if (nowLeft < -5750) {
				picContainer.style.left = -1150 + "px";
			}
			if (nowLeft > -1150) {
				picContainer.style.left =  -5750 + "px";
			}
		
		}

		var play = setInterval(nextArrow, 2000);

		function clearplay(){
			clearInterval(play);
		}
		function addplay(){
			play = setInterval(nextArrow, 2000);
		}

		var index = 0;
	
		function buttonsShow() {
			for (var i = 0; i < buttons.length; i++) {
				if (buttons[i].className == "selected") {
					buttons[i].className = "";
				}
				buttons[index].className = "selected";
			}
		}
		function prevArrow(){
			index -= 1;
			if (index <0) {
				index = 4;
			}
			buttonsShow();
			animate("1150");
		}
		function nextArrow(){
			index += 1;
			if (index > 4) {
				index = 0;
			}
			buttonsShow();
			animate("-1150");
		}
		function eleChildIndex(child){
			for(var i=0, len=buttons.length; i<len; i++){
				if(buttons[i]===child){
					return i;
					break;
				}
			}
		}
		function btnmouseover(e){
			var target = e.target;
			mouseoverIndex = eleChildIndex(target);
			offset = -1150 *(mouseoverIndex - index);
			animate(offset);
			index = mouseoverIndex;
			buttonsShow();
		}

		for (var i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("mouseover", btnmouseover)
		}
		prev.addEventListener("click", prevArrow);
		next.addEventListener("click", nextArrow);
		container.addEventListener("mouseover", clearplay);
		container.addEventListener("mouseout", addplay);