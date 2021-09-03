
window.onload = function(){
	// modal image popup
	var images = document.getElementsByClassName("img");
	var portraitImg = document.getElementsByClassName("portrait-img");
	var modal = document.getElementById("modal");
	var modalImg = document.getElementById("modal-img");
	var close = document.getElementById("close");

	for(i = 0; i < images.length; i++){
		images[i].addEventListener('click', function(e){
			modal.style.display = "block";
			var imgSrc = this.src.replace("mdpx", "xdpx");
			imgSrc = imgSrc.replace("600mdpx", "1440xdpx");
			modalImg.src = imgSrc;
		});
	}

	for(i = 0; i < portraitImg.length; i++){
		portraitImg[i].addEventListener('click', function(e){
			modal.style.display = "block";
			var imgSrc = this.src.replace("mdpx", "xdpx");
			imgSrc = imgSrc.replace("600mdpx", "1440xdpx");
			modalImg.src = imgSrc;
			modalImg.style.height = "80%";
			modalImg.style.width = "auto";
		});
	}

	close.addEventListener('click', function(e){
		modal.style.display = "none";
		modalImg.style.width = "60%";
		modalImg.style.height = "auto";
	});



	// adjust size and icon images
	var isClicked = false;
	var left_column = document.getElementsByClassName("left-column");
	var right_column = document.getElementsByClassName("right-column");
	var hidden_menu = document.getElementsByClassName("hidden-item");
	var menu_icon = document.getElementsByClassName("menu-icon");
	var list_icon = document.getElementsByClassName("list-icon");
	var item_description = document.getElementsByClassName("item-description");
	var menu_item_container = document.getElementsByClassName("menu-item-container");
	var list_item_container = document.getElementsByClassName("list-item-container");

	var height;
	var container_height;

	menu_icon[0].addEventListener('click', function(e){
		if(isClicked === false){
			// height = list_icon[0].scrollHeight;
			container_height = list_item_container[0].scrollHeight;

			// change the width of the 2 columns
			left_column[0].style.width = "15vw";
			right_column[0].style.width = "85vw";
			left_column[0].style.transition = "all .5s";
			right_column[0].style.transition = "all .5s";

			menu_item_container[0].style.width = "13vw";
			menu_item_container[0].style.margin = "20% auto 10% auto";
			menu_item_container[0].style.transition = "all .1s";

			menu_icon[0].classList.remove("glyphicon-menu-hamburger");
			menu_icon[0].classList.remove("glyphicon");
			menu_icon[0].classList.add("fa-remove");
			menu_icon[0].classList.add("fa");
			menu_icon[0].style.fontSize = "4vw";
			// menu_icon[0].style.transition = "all .1s";


			for(i = 0; i < hidden_menu.length; ++i){
				hidden_menu[i].style.display = "inline";
				hidden_menu[i].style.transition = "display .8s linear";
			}

			// alert(height);

			for(i = 0; i < list_item_container.length; ++i){
				list_item_container[i].style.width = "12vw";
				list_item_container[i].style.margin = "4% auto";
				list_item_container[i].style.transition = "all .2s ease";

				list_icon[i].style.fontSize = "3vw";

				// item_description[i].style.height = (height * .05) + "vw";
				// item_description[i].style.fontSize = (height) + "px";
				// item_description[i].style.padding = (height * .22) + "px 0px";
			}

			// alert(list_item_container[0].height);
			// alert(list_item_container[0].offsetHeight);

			isClicked = true;
		}else{
			// change the width of the columns back to original status
			left_column[0].style.width = "5vw";
			right_column[0].style.width = "95vw";

			menu_item_container[0].style.width = "3.5vw";
			menu_item_container[0].style.margin = "30% auto 0% auto";

			menu_icon[0].classList.remove("fa-remove");
			menu_icon[0].classList.remove("fa");
			menu_icon[0].classList.add("glyphicon-menu-hamburger");
			menu_icon[0].classList.add("glyphicon");
			menu_icon[0].style.fontSize = "3.5vw";






			for(i = 0; i < hidden_menu.length; ++i){
				hidden_menu[i].style.display = "none";
			}

			for(i = 0; i < list_item_container.length; ++i){
				list_item_container[i].style.width = "2.5vw";
				list_item_container[i].style.margin = "10% auto";

				list_icon[i].style.fontSize = "2.3vw";
			}

			isClicked = false;
		}
	});
}
